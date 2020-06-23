package com.example.demo;

import java.util.Collections;

import com.example.demo.repositories.ChefProjetRepository;
import com.example.demo.repositories.EmployeRepository;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest
class TestServiceApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	EmployeRepository employeRepository;
	


	@Test
	void contextLoads() throws Exception {

		Mockito.when(employeRepository.findAll()).thenReturn(
			Collections.emptyList()
		);
		

		MvcResult mvcResult = mockMvc.perform(
			MockMvcRequestBuilders.get("employe/all")
			.accept(MediaType.APPLICATION_JSON)
		).andReturn();

		System.out.println(mvcResult.getResponse());

		Mockito.verify(employeRepository).findAll();
		
	}

}
