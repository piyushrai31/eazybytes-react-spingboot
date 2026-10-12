package com.eazybytes.eazystore.controller;


import com.eazybytes.eazystore.dto.ContactResponseDto;
import com.eazybytes.eazystore.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final IContactService iContactService;

    @GetMapping("/orders")
    public ResponseEntity<?> getAllPendingOrders(){
        return ResponseEntity.ok().body("Hello from Admin orders");
    }

    @GetMapping("/messages")
    public ResponseEntity<List<ContactResponseDto>> getAllPendingMessages(){
        List<ContactResponseDto> allOpenContacts = iContactService.getAllOpenContacts();
        return ResponseEntity.ok().body(allOpenContacts);
    }
}
