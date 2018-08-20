package com.juju.juju.controller;


import com.juju.juju.dto.AddressDTO;
import com.juju.juju.dto.OrderDTO;
import com.juju.juju.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    OrderService orderService;


    @RequestMapping(method = RequestMethod.POST,value ="/addorder")
    public ResponseEntity addOrder(@RequestBody AddressDTO addressDTO,@RequestParam(name = "productid",required = true)String productid,@RequestParam(name = "merchantid",required = true)int merchantid,@RequestParam(name = "quantity",required = true)int quantity){

        Boolean addressDTO_add= orderService.placeOrder(addressDTO,productid,merchantid,quantity);
        return new ResponseEntity(addressDTO_add,HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST,value ="/addorderbycart")
    public ResponseEntity addOrdeycart(@RequestBody AddressDTO addressDTO,@RequestParam(name = "productname",required = true)String productname,@RequestParam(name = "merchant",required = true)String merchantname,@RequestParam(name = "quantity",required = true)int quantity,@RequestParam(name = "price",required = true)int price){

        Boolean addressDTO_add= orderService.placeOrderByCard(addressDTO,productname,merchantname,quantity,price);
        return new ResponseEntity(addressDTO_add,HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST,value ="/addallorder")
    public ResponseEntity addallOrder(@RequestBody AddressDTO addressDTO){

        Boolean addressDTO_add= orderService.allOrders(addressDTO);
        return new ResponseEntity(addressDTO_add,HttpStatus.OK);
    }





    @RequestMapping(method = RequestMethod.GET,value = "/getallorder")
    public ResponseEntity<List<OrderDTO>> getAllOrders(@RequestParam(name = "id",required = true)String email){

        List<OrderDTO> orderDTOList= orderService.getAllOrder(email);
        return new ResponseEntity<List<OrderDTO>>(orderDTOList,HttpStatus.OK);

    }

}
