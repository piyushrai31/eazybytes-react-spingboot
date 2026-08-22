package com.example.config;

import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class ProjectConfig {

    @Bean(name = "audiCar")
    Vehicle vehicle1(){
        Vehicle vehicle= new Vehicle();
        vehicle.setName("Audi");
        return vehicle;
    }

    @Bean(value = "mercedesCar")
    Vehicle vehicle2(){
        Vehicle vehicle= new Vehicle();
        vehicle.setName("Mercedes");
        return vehicle;
    }

    @Primary // this marks the bean as default bean when the name of the bean is not mentioned
    @Bean("ferrariCar")
    Vehicle vehicle3(){
        Vehicle vehicle= new Vehicle();
        vehicle.setName("Ferrari");
        return vehicle;
    }
}
