package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Employe;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.services.EmployeServices;

import io.swagger.annotations.Api;

@Api( value="Employe Api ",description =  "API pour les opérations CRUD sur les employes.")
@RestController
public class EmployeController {

	
	 	@Autowired
	 	EmployeServices employeservice;

	    @RequestMapping(method=RequestMethod.GET,value="/employe/all")
	    public List<Employe> getAllChefProjet(){
	    	System.out.println("get all employes controller");
	        return employeservice.getAllChefProjet();
	    }

	    @RequestMapping(method=RequestMethod.GET,value="/employe/{id_emp}")
	    public Employe getChefProjet(@PathVariable long id_emp) throws EmployeNotFoundException {
	        return employeservice.getChefProjet(id_emp);
	    }

	    @RequestMapping(method=RequestMethod.POST,value="/employe")
	    public Employe createChefProjet(@RequestBody Employe employe){
	        return employeservice.createChefProjet(employe);
	    }
	    @RequestMapping(method=RequestMethod.POST,value="/loginemploye")
	    public Employe loadByEmailPassword(String email, String password) throws EmployeNotFoundException{
	        return employeservice.loadByEmailPassword(email, password);
	    }

	    @RequestMapping(method=RequestMethod.PUT,value="/employe")
	    public void updateChefProjet(@RequestBody Employe employe) throws EmployeNotFoundException {
	    	employeservice.updateChefProjet(employe);
	    }

	    @RequestMapping(method=RequestMethod.DELETE,value="/employe/{id_emp}")
	    public void deleteChefProjet(@PathVariable long id_emp) throws EmployeNotFoundException {
	    	employeservice.deleteChefProjet(id_emp);
	    }
}
