package com.eazybytes.eazystore.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dummy")
@RequiredArgsConstructor
public class DummyController {

    @GetMapping
    public String search(){
        return "Searching in Dummy Controller..";
    }
}
