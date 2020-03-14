package com.gec.gmall;

import com.alibaba.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableDubbo
public class GmallUserWebApp8080 {

    public static void main(String[] args) {

        SpringApplication.run(GmallUserWebApp8080.class,args);
    }
}