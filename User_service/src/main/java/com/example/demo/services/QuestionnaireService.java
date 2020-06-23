package com.example.demo.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.example.demo.models.Questionnaire;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.repositories.QuestionnaireRepository;

@Service
@Transactional
@ComponentScan("com.example.repository")
public class QuestionnaireService {

	@Autowired
	private QuestionnaireRepository QuestionnaireRepo;
	
	public List<Questionnaire> getAllQuestionnaire() {
		System.out.println("get all responses service");
		List<Questionnaire> questionnaire=(List<Questionnaire>) QuestionnaireRepo.findAll();
		return questionnaire;
	}
	public Questionnaire getQuestionnaireId(long id_Questionnaire) throws EmployeNotFoundException {
		Questionnaire questionnaire = QuestionnaireRepo
				.findById(id_Questionnaire)
				.orElseThrow(() -> new EmployeNotFoundException(id_Questionnaire));
		return questionnaire;
	}

	
	public Questionnaire createQuestionnaire(Questionnaire questionnaire){
		return QuestionnaireRepo.save(questionnaire);
	}
	
	public void updateQuestionnaire(Questionnaire questionnaire) {
		QuestionnaireRepo.save(questionnaire);
		return;
	}
	
	public void deleteQuestionnaire(long id_questionnaire)  {
		QuestionnaireRepo.deleteById(id_questionnaire);
	}

}



