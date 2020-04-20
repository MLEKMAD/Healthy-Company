package com.example.demo.services;

import java.util.List;
//import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.ChefProjet;
import com.example.demo.repositories.ChefProjetNotFoundException;
import com.example.demo.repositories.ChefProjetRepository;


@Service
@Transactional
@ComponentScan("com.example.repository")
public class ChefProjetServices {
	@Autowired
    private ChefProjetRepository ChefProjetRepo;

    public List<ChefProjet> getAllChefProjet() {
    	System.out.println("get all employe service");
        List<ChefProjet> Employes=(List<ChefProjet>) ChefProjetRepo.findAll();
    	return Employes;
    }

    public ChefProjet getChefProjet(long id_emp) throws ChefProjetNotFoundException {
    	ChefProjet chefprojet = ChefProjetRepo
        		.findById(id_emp)
        		.orElseThrow(() -> new ChefProjetNotFoundException(id_emp));
        return chefprojet;
    }

    public ChefProjet createChefProjet(ChefProjet chefprojet){
        return ChefProjetRepo.save(chefprojet);
    }

    public void updateChefProjet(ChefProjet chefprojet) throws ChefProjetNotFoundException {
    	ChefProjetRepo.save(chefprojet);
    	return;
    }

    public void deleteChefProjet(long id_chef_projet)  {
    	ChefProjetRepo.deleteById(id_chef_projet);
    }
/*
    public UserDetails loadByNamePassword(String name, String password) throws ChefProjetNotFoundException {
        Objects.requireNonNull(name);
        Objects.requireNonNull(password);
        Employe employe = ChefProjetRepo.findByEmailPassword(name,password)
        		.orElseThrow(() -> new ChefProjetNotFoundException("User not found"));
        return (UserDetails) chefprojet;
    }

    public UserDetails loadUserByUsername(String s) throws ChefProjetNotFoundException {
        Objects.requireNonNull(s);
        ChefProjet chefprojet = ChefProjetRepo.findByName(s).orElseThrow(() -> new ChefProjetNotFoundException("User not found"));
        return (UserDetails) chefprojet;
    }
*/
}
