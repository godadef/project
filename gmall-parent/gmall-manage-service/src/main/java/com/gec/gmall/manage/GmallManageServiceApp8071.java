package com.gec.gmall.manage;

import com.alibaba.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@EnableDubbo
@MapperScan("com.gec.gmall.manage.dao")
public class GmallManageServiceApp8071 {

    public static void main(String[] args) {

        SpringApplication.run(GmallManageServiceApp8071.class,args);

    }
}