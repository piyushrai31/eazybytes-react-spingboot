package com.eazybytes.eazystore.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
public class ContactRequestDto {

    @NotBlank
    @Size(min = 3, max = 30, message = "Name length should be btw 3 to 30")
    private String name;
    @NotBlank
    @Email(message = "Enter a valid email")
    private String email;
    @NotBlank
    @Pattern(regexp = "^\\d{10}$",message = "Mobile Number should be of 10 digit")
    private String mobileNumber;
    @NotBlank
    @Size(min = 5,max = 500, message = "Message length should be btw 5 to 500")
    private String message;
}
