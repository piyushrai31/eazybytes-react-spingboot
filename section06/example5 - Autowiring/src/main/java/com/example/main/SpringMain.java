package com.example.main;

import com.example.beans.Engine;
import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class SpringMain {

    public static void main(String[] args) {

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle vehicle = context.getBean(Vehicle.class);
        Engine engine = context.getBean(Engine.class);

        System.out.println("engine name from engine bean " + engine.getName());
        System.out.println("Vehicle name from vehicle bean " + vehicle.getName());
        System.out.println("vehicle engine name is : " + vehicle.getEngine());
    }
}
