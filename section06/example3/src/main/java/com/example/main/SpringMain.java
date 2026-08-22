package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class SpringMain {

    public static void main(String[] args) {

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle vehicle = context.getBean(Vehicle.class);

        System.out.println("Name of the vehicle from Spring Context: " + vehicle.getName());
        System.out.println("from spring context "+ vehicle.sayHello());

    }
}
