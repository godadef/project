package com.gec.gmall.manage;

import com.alibaba.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableDubbo
public class GmallManageWebApp8081 {
    public static void main(String[] args) {

        SpringApplication.run(GmallManageWebApp8081.class,args);
    }
}
