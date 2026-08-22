package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class SpringMain {

    public static void main(String[] args) {

        Vehicle newVehicle= new Vehicle();
        newVehicle.setName("Jaguar F-Pace");

        System.out.println(newVehicle.getName());

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle vehicleBean = context.getBean(Vehicle.class);

        System.out.println("From Spring context Vehicle name " + vehicleBean.getName());
    }
}
