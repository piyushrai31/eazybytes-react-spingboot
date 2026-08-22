package com.example.config;


import com.example.beans.Engine;
import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
//@ComponentScan(basePackages = {"com.example.beans"})
public class ProjectConfig {

//    @Bean
//    Vehicle vehicle(){ // method invocation
//        Vehicle vehicle = new Vehicle();
//        vehicle.setName("Kia");
//        vehicle.setEngine(engine());
//        return vehicle;
//    }

    @Bean
    Vehicle vehicle(Engine engine){
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Toyota");
        vehicle.setEngine(engine);
        return vehicle;
    }

    @Bean
    Engine engine(){
        Engine engine= new Engine();
        engine.setName("V8");
        return engine;
    }

}
