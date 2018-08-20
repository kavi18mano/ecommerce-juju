package com.juju.juju.repository;

import com.juju.juju.entity.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository extends CrudRepository<Order,String> {
    Order findByOrderID(String orderid);
    List<Order> findByEmailid(String email);

}
