package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Questionnaire;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.services.QuestionnaireService;

@RestController
public class QuestionnaireController {

 	@Autowired
 	QuestionnaireService questionnaireservice;

    @RequestMapping(method=RequestMethod.GET,value="/questionnaire/all")
    public List<Questionnaire> getAllChefProjet(){
    	System.out.println("get all quest controller");
        return questionnaireservice.getAllQuestionnaire();
    }
    @RequestMapping(method=RequestMethod.GET,value="/questionnaire/{id_quest}")
    public Questionnaire getQuestionnaireById(@PathVariable long id_quest) throws EmployeNotFoundException {
        return questionnaireservice.getQuestionnaireId(id_quest);
    }

    @RequestMapping(method=RequestMethod.POST,value="/questionnaire")
    public Questionnaire createChefProjet(@RequestBody Questionnaire Questionnaire){
        return questionnaireservice.createQuestionnaire(Questionnaire);
    }
    @RequestMapping(method=RequestMethod.PUT,value="/questionnaire")
    public void updateChefProjet(@RequestBody Questionnaire Questionnaire) throws EmployeNotFoundException {
 		questionnaireservice.updateQuestionnaire(Questionnaire);
    }

}
