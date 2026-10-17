package com.eazybytes.eazystore.dto;

import com.eazybytes.eazystore.entity.OrderItem;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrderResponseDto {
    private Long orderId;
    private List<OrderItem> orderItems = new ArrayList<>();
    private BigDecimal totalPrice;
    private String orderStatus;
    private String createdAt;
}
