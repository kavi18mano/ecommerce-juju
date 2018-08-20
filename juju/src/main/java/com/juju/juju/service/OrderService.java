package com.juju.juju.service;

import com.juju.juju.dto.AddressDTO;
import com.juju.juju.dto.OrderDTO;

import java.util.List;

public interface OrderService {
    Boolean placeOrder(AddressDTO addressDTO, String productid, int merchantid, int quantity);

    Boolean allOrders(AddressDTO addressDTO);

    List<OrderDTO> getAllOrder(String email);

    Boolean placeOrderByCard(AddressDTO addressDTO, String productname, String merchantname, int quantity, int price);
}
