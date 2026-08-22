package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class SpringMain {

    public static void main(String[] args) {

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle audiCar = context.getBean("audiCar",Vehicle.class);

        System.out.println("From Spring context Vehicle name: " + audiCar.getName());

        Vehicle mercedesCar = context.getBean("mercedesCar",Vehicle.class);

        System.out.println("From Spring context Vehicle name: " + mercedesCar.getName());

        Vehicle ferrariCar = context.getBean(Vehicle.class);

        System.out.println("Primary Bean From Spring context Vehicle name: " + ferrariCar.getName());
    }
}
