package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.Employe;
import com.example.repository.EmployeNotFoundException;
import com.example.services.EmployeService;

@RestController
public class EmployeController {
	
    @Autowired
	private EmployeService EmployeService;

    @RequestMapping("/employe/all")
    //@ApiParam(value="find all employes")
    public List<Employe> getAllEmployes(){
    	System.out.println("get all employes controller");
        return EmployeService.getAllEmploye();
    }

    @RequestMapping("/employe/{id_emp}")
    //@ApiParam(value="find employe by id")
    public Employe getEmploye(@PathVariable long id_emp) throws EmployeNotFoundException {
        return EmployeService.getEmploye(id_emp);
    }

    @RequestMapping(method=RequestMethod.POST,value="")
    //@ApiParam(value="create new employe")
    public Employe createEmploye(@RequestBody Employe Employe){
        return EmployeService.createEmploye(Employe);
    }

    @RequestMapping(method=RequestMethod.PUT,value="/")
    //@ApiParam(value="update employe")
    public void updateEmploye(@RequestBody Employe Employe) throws EmployeNotFoundException {
        EmployeService.updateEmploye(Employe);
    }

    @RequestMapping(method=RequestMethod.DELETE,value="/{id_emp}")
    //@ApiParam(value="Delete employe")
    public void deleteEmploye(@PathVariable long id_emp) throws EmployeNotFoundException {
        EmployeService.deleteEmploye(id_emp);
    }
}
