package com.example.demo.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//import java.util.Collections;

//import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.any())
				.apis(RequestHandlerSelectors.basePackage("com.example.demo"))
				.build()
				.apiInfo(metadata());
		
	}

	
	private ApiInfo metadata() {
		ApiInfo apiInfo =new ApiInfo(
				"api e-sante app ensias ",
				"spring boot api",
				"1.0",
				"terms of service",
				new springfox.documentation.service.Contact("LAHLALI Hatim", "http://e_sante", "hatimlahlali.13@outlook.fr"),
				"API License",
				"NONE",
				Collections.emptyList()
				);
		return apiInfo;
	}
}