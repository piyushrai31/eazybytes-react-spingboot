package com.eazybytes.eazystore.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "contacts")
public class Contact extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //here we are letting the DB create the IDs
    @Column(name="contact_id",nullable = false)
    private Long id;

    @Column(name="name",nullable = false)
    private String name;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "mobile_number",nullable = false)
    private String mobileNumber;

    @Column(name = "message",nullable = false)
    private String message;
}
