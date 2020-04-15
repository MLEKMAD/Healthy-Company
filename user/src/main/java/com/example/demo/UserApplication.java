package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.example.controllers","com.example.services","com.example.repository","com.example.models"})
public class UserApplication {

	public static void main(String[] args) {
		System.out.println("start");
		SpringApplication.run(UserApplication.class, args);
	}


}
