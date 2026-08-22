package com.example.beans;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Vehicle {
    private String name;

    private Engine engine;

    @Autowired
    public Vehicle(Engine engine) {
        this.engine = engine;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {
        this.name = name;
    }




}
