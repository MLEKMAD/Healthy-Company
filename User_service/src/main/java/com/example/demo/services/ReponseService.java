package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.Employe;
import com.example.demo.models.Questionnaire;
import com.example.demo.models.Reponse;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.repositories.QuestionnaireRepository;
import com.example.demo.repositories.ReponseRepository;
@Service
@Transactional
@ComponentScan("com.example.repository")
public class ReponseService {

	@Autowired
	private ReponseRepository ReponseRepository;
	public List<Reponse> getAllReponse() {
		System.out.println("get all responses service");
		List<Reponse> reponses=(List<Reponse>) ReponseRepository.findAll();
		return reponses;
	}
	public Reponse getReponseId(long id_reponse) throws EmployeNotFoundException {
		Reponse reponse = ReponseRepository
				.findById(id_reponse)
				.orElseThrow(() -> new EmployeNotFoundException(id_reponse));
		return reponse;
	}

	public Reponse createReponse(Reponse Reponse){
		return ReponseRepository.save(Reponse);
	}
	
	public void updateReponse(Reponse Reponse) {
		ReponseRepository.save(Reponse);
		return;
	}
	
	public void deleteReponse(long id_emp)  {
		ReponseRepository.deleteById(id_emp);
	}
	
}
