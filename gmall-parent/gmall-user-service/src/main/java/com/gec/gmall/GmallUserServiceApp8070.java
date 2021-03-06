package com.gec.gmall;

import com.alibaba.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@EnableDubbo
@MapperScan("com.gec.gmall.user.dao")
public class GmallUserServiceApp8070 {

    public static void main(String[] args) {

        SpringApplication.run(GmallUserServiceApp8070.class,args);

    }
}