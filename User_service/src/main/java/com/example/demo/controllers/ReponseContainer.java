package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Employe;
import com.example.demo.models.Questionnaire;
import com.example.demo.models.Reponse;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.services.QuestionnaireService;
import com.example.demo.services.ReponseService;

import io.swagger.annotations.Api;

@Api( value="Reponse Api ",description =  "API pour les opérations CRUD sur les reponses.")
@RestController
public class ReponseContainer {
	@Autowired
 	ReponseService reponseservice;

 	@CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(method=RequestMethod.GET,value="/reponse/all")
    public List<Reponse> getAllChefProjet(){
    	System.out.println("get all employes controller");
        return reponseservice.getAllReponse();
    }
 	@CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(method=RequestMethod.GET,value="/reponse/{id_reponse}")
    public Reponse getQuestionnaireById(@PathVariable long id_reponse) throws EmployeNotFoundException {
        return reponseservice.getReponseId(id_reponse);
    }

 	@CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(method=RequestMethod.POST,value="/reponse")
    public Reponse createChefProjet(@RequestBody Reponse Reponse){
        return reponseservice.createReponse(Reponse);
    }
 	@CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(method=RequestMethod.PUT,value="/reponse")
    public void updateChefProjet(@RequestBody Reponse Reponse) throws EmployeNotFoundException {
 		reponseservice.updateReponse(Reponse);
    }
}
