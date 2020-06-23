package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.ChefProjet;
import com.example.demo.repositories.ChefProjetNotFoundException;
import com.example.demo.services.ChefProjetServices;



@RestController
public class ChefProjetController {

	
		@Autowired
		ChefProjetServices chefprojetservice;
	    public List<ChefProjet> getAllChefProjet(){
	    	System.out.println("get all employes controller");
	        return chefprojetservice.getAllChefProjet();
	    }
	    @RequestMapping(method=RequestMethod.GET,value="/chefprojet/{id_chef_projet}")
	    public ChefProjet getChefProjet(@PathVariable long id_chef_projet) throws ChefProjetNotFoundException {
	        return chefprojetservice.getChefProjet(id_chef_projet);
	    }
	    @RequestMapping(method=RequestMethod.POST,value="/chefprojet")
	    public ChefProjet createChefProjet(@RequestBody ChefProjet chefprojet){
	        return chefprojetservice.createChefProjet(chefprojet);
	    }
		@RequestMapping(method=RequestMethod.POST,value="/loginchefprojet")
	    public ChefProjet loadByEmailPassword(String email, String password) throws ChefProjetNotFoundException{
	        return chefprojetservice.loadByEmailPassword(email, password);
	    }
	    @RequestMapping(method=RequestMethod.PUT,value="/chefprojet")
	    public void updateChefProjet(@RequestBody ChefProjet chefprojet) throws ChefProjetNotFoundException {
	    	chefprojetservice.updateChefProjet(chefprojet);
	    }
	    @RequestMapping(method=RequestMethod.DELETE,value="/chefprojet/{id_chef_projet}")
	    public void deleteChefProjet(@PathVariable long id_chef_projet) throws ChefProjetNotFoundException {
	    	chefprojetservice.deleteChefProjet(id_chef_projet);
	    }
}
