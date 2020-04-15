package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.example.Models.Employe;
import com.example.repository.EmployeNotFoundException;
import com.example.repository.EmployeRepository;

//import java.util.Objects;
@Service
@Component("empserv")
//@ComponentScan(basePackages = "com.repository")
public class EmployeService {
	
			@Autowired
		    private EmployeRepository EmployeRepository;

		    public List<Employe> getAllEmploye() {
		    	System.out.println("get all employe service");
		        List<Employe> Employes=(List<Employe>) EmployeRepository.findAll();

		    	return Employes;
		    }

		    public Employe getEmploye(long id_emp) throws EmployeNotFoundException {
		        Employe Employe = EmployeRepository
		        		.findById(id_emp)
		        		.orElseThrow(() -> new EmployeNotFoundException(id_emp));
		        return Employe;
		    }

		    public Employe createEmploye(Employe Employe){
		        return EmployeRepository.save(Employe);
		    }

		    public void updateEmploye(Employe Employe) throws EmployeNotFoundException {
		    	EmployeRepository.save(Employe);
		    	return;
		    }

		    public void deleteEmploye(long id_emp)  {
		        EmployeRepository.deleteById(id_emp);
		    }
/*
		    public UserDetails loadByNamePassword(String name, String password) throws EmployeNotFoundException {
		        Objects.requireNonNull(name);
		        Objects.requireNonNull(password);
		        Employe employe = EmployeRepository.findByEmailPassword(name,password)
		        		.orElseThrow(() -> new EmployeNotFoundException("User not found"));
		        return (UserDetails) employe;
		    }

//		    public UserDetails loadUserByUsername(String s) throws EmployeNotFoundException {
		        Objects.requireNonNull(s);
		        Employe Employe = EmployeRepository.findByName(s).orElseThrow(() -> new EmployeNotFoundException("User not found"));
		        return (UserDetails) Employe;
		    }
*/
}
