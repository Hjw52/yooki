package org.lanqiao.yk;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("org.lanqiao.yk.mapper")
public class YkApplication {

    public static void main(String[] args) {
        SpringApplication.run(YkApplication.class, args);
    }

}
