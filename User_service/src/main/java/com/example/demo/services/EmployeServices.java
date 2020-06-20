package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.Employe;
import com.example.demo.repositories.EmployeNotFoundException;
import com.example.demo.repositories.EmployeRepository;

@Service
@Transactional
@ComponentScan("com.example.repository")
public class EmployeServices {

	@Autowired
	private EmployeRepository employeRepo;
	public List<Employe> getAllChefProjet() {
		System.out.println("get all employe service");
		List<Employe> Employes=(List<Employe>) employeRepo.findAll();
		return Employes;
	}
	
	public Employe getChefProjet(long id_emp) throws EmployeNotFoundException {
		Employe employe = employeRepo
				.findById(id_emp)
				.orElseThrow(() -> new EmployeNotFoundException(id_emp));
		return employe;
	}
	
	public Employe createChefProjet(Employe employe){
		return employeRepo.save(employe);
	}
	
	public void updateChefProjet(Employe employe) throws EmployeNotFoundException {
		employeRepo.save(employe);
		return;
	}
	
	public void deleteChefProjet(long id_emp)  {
		employeRepo.deleteById(id_emp);
	}
	public Employe loadByEmailPassword(String email, String password) throws EmployeNotFoundException {
		Employe employe = employeRepo.findByEmailPassword(email,password)
				.orElseThrow(() -> new EmployeNotFoundException("User not found"));
		return (Employe) employe;
	}
}


