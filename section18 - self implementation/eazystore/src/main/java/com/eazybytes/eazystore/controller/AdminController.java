package com.eazybytes.eazystore.controller;


import com.eazybytes.eazystore.constants.ApplicationConstants;
import com.eazybytes.eazystore.dto.ContactResponseDto;
import com.eazybytes.eazystore.dto.MessageRequestDto;
import com.eazybytes.eazystore.dto.OrderResponseDto;
import com.eazybytes.eazystore.dto.OrderStatusResponseDto;
import com.eazybytes.eazystore.service.IContactService;
import com.eazybytes.eazystore.service.IOrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final IContactService iContactService;
    private final IOrderService iOrderService;

    @GetMapping("/orders")
    public ResponseEntity<List<OrderResponseDto>> getAllPendingOrders(){
        List<OrderResponseDto> ordersByOrderStaus = iOrderService.getOrdersByOrderStaus();
        return ResponseEntity.ok().body(ordersByOrderStaus);
    }

    @GetMapping("/messages")
    public ResponseEntity<List<ContactResponseDto>> getAllPendingMessages(){
        List<ContactResponseDto> allOpenContacts = iContactService.getAllOpenContacts();
        return ResponseEntity.ok().body(allOpenContacts);
    }

    @PutMapping("/messageStatus")
    public Boolean setMessageStatusClosed(@RequestBody MessageRequestDto messageRequestDto){
        System.out.println("value of request body " + messageRequestDto.messageId());
        if(messageRequestDto.messageId()==null){
            return false;
        }
        return iContactService.closeContact(messageRequestDto.messageId());
    }

    @PutMapping("/orderStatus")
    public ResponseEntity<?> updateOrderStatus(@RequestBody OrderStatusResponseDto orderStatusResponseDto){
        String updatedStatus = orderStatusResponseDto.updatedStatus();
        log.info("response came here with: "+ updatedStatus);
        Long id = orderStatusResponseDto.id();
        if(updatedStatus.equalsIgnoreCase("confirm")){
            if(iOrderService.updateOrderStatus(id, ApplicationConstants.ORDER_STATUS_CONFIRMED)){
                log.info("updated status with: "+ updatedStatus + " for " + id);
                return ResponseEntity.ok(true);
            }
            else return ResponseEntity.internalServerError().body("Update Failed. Please try again!");

        }
        else {
             if(iOrderService.updateOrderStatus(id, ApplicationConstants.ORDER_STATUS_CANCELLED)){
                 log.info("updated status with: "+ updatedStatus + " for " + id);
                 return ResponseEntity.ok(true);
             }
             else return ResponseEntity.internalServerError().body("Update Failed. Please try again!");
        }
    }
}
