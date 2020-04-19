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

@RestController
public class EmployeController {

	
	 	@Autowired
	 	EmployeServices employeservice;

	    @RequestMapping("/employe/all")
	    //@ApiParam(value="find all employes")
	    public List<Employe> getAllChefProjet(){
	    	System.out.println("get all employes controller");
	        return employeservice.getAllChefProjet();
	    }

	    @RequestMapping("/employe/{id_emp}")
	    //@ApiParam(value="find employe by id")
	    public Employe getChefProjet(@PathVariable long id_emp) throws EmployeNotFoundException {
	        return employeservice.getChefProjet(id_emp);
	    }

	    @RequestMapping(method=RequestMethod.POST,value="/employe")
	    //@ApiParam(value="create new employe")
	    public Employe createChefProjet(@RequestBody Employe employe){
	        return employeservice.createChefProjet(employe);
	    }

	    @RequestMapping(method=RequestMethod.PUT,value="/employe")
	    //@ApiParam(value="update employe")
	    public void updateChefProjet(@RequestBody Employe employe) throws EmployeNotFoundException {
	    	employeservice.updateChefProjet(employe);
	    }

	    @RequestMapping(method=RequestMethod.DELETE,value="/employe/{id_emp}")
	    //@ApiParam(value="Delete employe")
	    public void deleteChefProjet(@PathVariable long id_emp) throws EmployeNotFoundException {
	    	employeservice.deleteChefProjet(id_emp);
	    }
}
