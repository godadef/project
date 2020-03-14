package com.ht.htsys.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@MapperScan("com.ht.htsys.dao")
public class MyBatisConfig {
    //配置生成数据源
    @Bean
    @ConfigurationProperties(prefix =
            "spring.datasource")
    public DataSource dataSource(){
        return new DruidDataSource();
    }
}

