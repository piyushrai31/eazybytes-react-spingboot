package com.example.beans;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("cappuccino")
@Primary
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class Cappuccino implements Coffee{

    @Override
    public String makeCoffee() {
        return "making Cappuccino";
    }
}
