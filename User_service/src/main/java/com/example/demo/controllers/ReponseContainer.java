package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Reponse;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.services.ReponseService;


@RestController
public class ReponseContainer {
	@Autowired
 	ReponseService reponseservice;

    @RequestMapping(method=RequestMethod.GET,value="/reponse/all")
    public List<Reponse> getAllChefProjet(){
    	System.out.println("get all employes controller");
        return reponseservice.getAllReponse();
    }
    @RequestMapping(method=RequestMethod.GET,value="/reponse/{id_reponse}")
    public Reponse getQuestionnaireById(@PathVariable long id_reponse) throws EmployeNotFoundException {
        return reponseservice.getReponseId(id_reponse);
    }

    @RequestMapping(method=RequestMethod.POST,value="/reponse")
    public Reponse createChefProjet(@RequestBody Reponse Reponse){
        return reponseservice.createReponse(Reponse);
    }
    @RequestMapping(method=RequestMethod.PUT,value="/reponse")
    public void updateChefProjet(@RequestBody Reponse Reponse) throws EmployeNotFoundException {
 		reponseservice.updateReponse(Reponse);
    }
}
