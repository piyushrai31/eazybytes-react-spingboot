package com.eazybytes.eazystore.service.impl;

import com.eazybytes.eazystore.constants.ApplicationConstants;
import com.eazybytes.eazystore.dto.ContactRequestDto;
import com.eazybytes.eazystore.dto.ContactResponseDto;
import com.eazybytes.eazystore.entity.Contact;
import com.eazybytes.eazystore.repository.ContactRepository;
import com.eazybytes.eazystore.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements IContactService {

    private final ContactRepository contactRepository;

    @Override
    public Boolean saveContact(ContactRequestDto contactRequestDto) {
        try{
            Contact contact = transformToEntity(contactRequestDto);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactRequestDto.getName());
            contact.setStatus(ApplicationConstants.CONTACTS_STATUS_OPEN);
            contactRepository.save(contact);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }


    }

    private Contact transformToEntity(ContactRequestDto contactRequestDto){
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactRequestDto,contact);
        return contact;
    }

    @Override
    public List<ContactResponseDto> getAllOpenContacts() {
        try{
            List<Contact> contacts = contactRepository.findByStatus(ApplicationConstants.CONTACTS_STATUS_OPEN);
            return contacts.stream().map(this::transformToDto).collect(Collectors.toList());
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

    private ContactResponseDto transformToDto(Contact contact){
        ContactResponseDto contactResponseDto = new ContactResponseDto();
        BeanUtils.copyProperties(contact,contactResponseDto);
        return contactResponseDto;
    }

    @Override
    public Boolean closeContact(Long messageId) {
        try{
            Optional<Contact> contact = contactRepository.findById(messageId);
            contact.get().setStatus(ApplicationConstants.CONTACTS_STATUS_CLOSED);
            contactRepository.save(contact.get());
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }

    }
}
