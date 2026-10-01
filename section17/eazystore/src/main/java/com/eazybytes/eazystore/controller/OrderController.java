package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.dto.OrderRequestDto;
import com.eazybytes.eazystore.dto.OrderResponseDto;
import com.eazybytes.eazystore.dto.UserDto;
import com.eazybytes.eazystore.entity.Order;
import com.eazybytes.eazystore.repository.OrderRepository;
import com.eazybytes.eazystore.service.IOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final IOrderService iOrderService;
    private final OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody  OrderRequestDto requestDto) {
        iOrderService.createOrder(requestDto);
        return ResponseEntity.ok("Order created successfully!");
    }

    @GetMapping
    public ResponseEntity<Optional<List<Order>>> getOrderById(){
        Optional<List<Order>> ordersById = iOrderService.getOrdersById();
        return ResponseEntity.ok().body(ordersById);
    }
}