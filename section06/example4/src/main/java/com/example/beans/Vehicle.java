package com.example.beans;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;


public class Vehicle {
    private String name;
    private Engine engine;

    public String getName() {

        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Engine getEngine(){
        return engine;
    }

    public void setEngine(Engine engine){
        this.engine = engine;
    }


}
