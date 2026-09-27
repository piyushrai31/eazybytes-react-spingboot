package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.dto.ContactRequestDto;
import com.eazybytes.eazystore.dto.ProductDto;
import com.eazybytes.eazystore.service.IContactService;
import com.eazybytes.eazystore.service.IProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contacts")
@RequiredArgsConstructor
public class ContactRequestController {

    private final IContactService iContactService;

    @PostMapping
    public ResponseEntity<String> saveContact(@Valid @RequestBody ContactRequestDto contactRequestDto) {
        iContactService.saveContact(contactRequestDto);
//        if(isSaved){
//            return ResponseEntity.ok().body("Contact Saved Successfully.");
//        throw new RuntimeException("error aagya bhaiya");
            return ResponseEntity.status(HttpStatus.CREATED).body("Contact Saved Successfully.");

//        }
//        else{
//            return ResponseEntity.internalServerError().body("Contact saving failed. Please try again.");
//        }
    }

}
