package com.juju.juju.service.Impl;


import com.juju.juju.dto.AddressDTO;
import com.juju.juju.dto.OrderDTO;
import com.juju.juju.entity.Address;
import com.juju.juju.entity.Order;
import com.juju.juju.repository.AddressRepository;
import com.juju.juju.repository.OrderRepository;
import com.juju.juju.service.OrderService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class OrderServiceImpl implements OrderService {


    @Autowired
    AddressRepository addressRepository;

    @Autowired
    OrderRepository orderRepository;

    @Override
    public Boolean placeOrder(AddressDTO addressDTO, String productid, int merchantid, int quantity) {

        try {
            OrderDTO orderDTO = new OrderDTO();
            Order order = new Order();


            RestTemplate restTemplate = new RestTemplate();

            MerchantDuplicate merchantDuplicate = restTemplate.getForObject("http://10.177.1.246:8080/product/getorderresponce?productid=" + productid + "&merchant=" + merchantid+"&quantity="+quantity, MerchantDuplicate.class);


            System.out.println(merchantDuplicate);
            orderDTO.setPrice(new Double(merchantDuplicate.getPrice()));
            orderDTO.setDate(new Date().toString());
            orderDTO.setMerchantName(merchantDuplicate.getMerchantname());
            orderDTO.setEmailid(addressDTO.getUserEmailid());
            orderDTO.setProductName(merchantDuplicate.getName());
            orderDTO.setQuantity(quantity);
            System.out.println(orderDTO);
            BeanUtils.copyProperties(orderDTO, order);
            orderRepository.save(order);
            System.out.println(order);



            addAddress(addressDTO, order.getOrderID());
            sentMail(order.getOrderID(),addressDTO.toString());

        }
        catch(Exception e){
            System.out.println(e);
        }

            return null;

    }

    @Override
    public Boolean allOrders(AddressDTO addressDTO) {

        try {


            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<OrderDTO[]> responseEntity = restTemplate.getForEntity("http://10.177.1.246:8081/cart/getall?emailId="+addressDTO.getUserEmailid(), OrderDTO[].class);
            OrderDTO[] orderDTOList = responseEntity.getBody();
            for (OrderDTO orderDTO : orderDTOList) {

                Order order = new Order();
                orderDTO.setDate(new Date().toString());
                orderDTO.setEmailid(addressDTO.getUserEmailid());
                System.out.println(orderDTO);
                BeanUtils.copyProperties(orderDTO, order);

                try {
                    restTemplate.getForObject("http://10.177.1.246:8080/product/updateStockByName?productname=" + orderDTO.getProductName() + "&merchantname=" + orderDTO.getMerchantName()+"&quantity="+orderDTO.getQuantity(), MerchantDuplicate.class);

                }catch (Exception e){
                    System.out.println(e);
                }


                orderRepository.save(order);


                addAddress(addressDTO, order.getOrderID());
                System.out.println(order);
                sentMail(order.getOrderID(), addressDTO.toString());


            }
            restTemplate.getForEntity("http://10.177.1.246:8081/cart/deleteall?emailId="+addressDTO.getUserEmailid(), OrderDTO.class);



        }catch (Exception e){
            System.out.println(e);
        }



        return null;
    }

    public Boolean addAddress(AddressDTO addressDTO,String orderid){

        addressDTO.setOrderid(orderid);
        Address address=new Address();
        BeanUtils.copyProperties(addressDTO,address);
        addressRepository.save(address);

        return null;
    }



    @Override
    public List<OrderDTO> getAllOrder(String email) {
        List<OrderDTO> orderDTOList=new ArrayList<>();
        List<Order> orderList=orderRepository.findByEmailid(email);
        for(Order order:orderList) {
            OrderDTO orderDTO = new OrderDTO();
            BeanUtils.copyProperties(order,orderDTO);
            orderDTOList.add(orderDTO);
        }
        return orderDTOList;
    }

    @Override
    public Boolean placeOrderByCard(AddressDTO addressDTO, String productname, String merchantname, int quantity, int price) {


        OrderDTO orderDTO = new OrderDTO();
        Order order = new Order();
        orderDTO.setEmailid(addressDTO.getUserEmailid());
        orderDTO.setDate(new Date().toString());
        orderDTO.setQuantity(quantity);
        orderDTO.setProductName(productname);
        orderDTO.setPrice(new Double(price));
        orderDTO.setMerchantName(merchantname);
        BeanUtils.copyProperties(orderDTO,order);

        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.getForObject("http://10.177.1.246:8080/product/updateStockByName?productname=" + productname + "&merchantname=" + merchantname + "&quantity=" + quantity, MerchantDuplicate.class);
        }
        catch (Exception e){
            System.out.println(e);
        }
            orderRepository.save(order);

            addAddress(addressDTO, order.getOrderID());
            sentMail(order.getOrderID(), addressDTO.toString());

        return null;
    }


    @Autowired
    private JavaMailSender javaMailSender;

    public Boolean sentMail(String orderid,String address) {

        if(orderid!=null) {

            Order order=orderRepository.findByOrderID(orderid);

            String toEmail = order.getEmailid();
            String subject = "according to order placement";
            String message = new StringBuilder().append("your order successfully confirmed\n ").append(order).toString();
            message=message+address;
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(toEmail);
            mailMessage.setSubject(subject);
            mailMessage.setText(message);
            mailMessage.setFrom("udhayakumaras16@gmail.com");
            javaMailSender.send(mailMessage);
            return Boolean.TRUE;

        }
        return Boolean.FALSE;
    }

}
