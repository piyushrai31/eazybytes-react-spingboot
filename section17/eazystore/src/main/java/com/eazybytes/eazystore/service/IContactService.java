package com.eazybytes.eazystore.service;

import com.eazybytes.eazystore.controller.ContactRequestController;
import com.eazybytes.eazystore.dto.ContactRequestDto;
import com.eazybytes.eazystore.dto.ProductDto;

import java.util.List;

public interface IContactService {

    Boolean saveContact(ContactRequestDto contactRequestDto);
}
