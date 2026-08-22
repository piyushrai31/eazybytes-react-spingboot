package com.example.beans;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Vehicle {
    private String name;
    private final Engine engine;


    @Autowired
    public Vehicle(Engine engine) {
        this.engine = engine;
        System.out.println("Vehicle bean created by spring");
    }

    public String getName() {

        return name;
    }

    @PostConstruct
    public void setName() {
        this.name = "Ferrari";
    }

    public Engine getEngine(){
        return engine;
    }

//    @Autowired // setter injection
//    public void setEngine(Engine engine){
//        this.engine = engine;
//    }


}
