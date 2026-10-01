package com.eazybytes.eazystore.service;

import com.eazybytes.eazystore.dto.OrderRequestDto;
import com.eazybytes.eazystore.entity.Order;

import java.util.List;
import java.util.Optional;

public interface IOrderService {

    void createOrder(OrderRequestDto orderRequest);
    Long getCustomerId();
    Optional<List<Order>> getOrdersById();
}