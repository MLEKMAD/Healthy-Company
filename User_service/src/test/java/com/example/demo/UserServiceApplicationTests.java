package com.example.demo;

import java.util.Collections;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.example.demo.repositories.EmployeRepository;

@SpringBootTest
class UserServiceApplicationTests {

	@Autowired
	MockMvc mockMvc;
	@MockBean
	EmployeRepository employeRepository;
	@Test
	void contextLoads() throws Exception{
		Mockito.when(employeRepository.findAll()).thenReturn(
					Collections.emptyList()
				);
			MvcResult mvcResult=mockMvc.perform(
						MockMvcRequestBuilders.get("/employe/all")
						.accept(MediaType.APPLICATION_JSON)
					).andReturn();
			System.out.println(mvcResult.getResponse());
			
			Mockito.verify(employeRepository).findAll();
	}

}
