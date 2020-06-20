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
        List<ChefProjet> chefprojets=(List<ChefProjet>) ChefProjetRepo.findAll();
    	return chefprojets;
    }

    public ChefProjet getChefProjet(long id_chef_projet) throws ChefProjetNotFoundException {
    	ChefProjet chefprojet = ChefProjetRepo
        		.findById(id_chef_projet)
        		.orElseThrow(() -> new ChefProjetNotFoundException(id_chef_projet));
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

    public ChefProjet loadByEmailPassword(String email, String password) throws ChefProjetNotFoundException {
    	ChefProjet ChefProjet = ChefProjetRepo.findByEmailPassword(email,password)
        		.orElseThrow(() -> new ChefProjetNotFoundException("User not found"));
        return (ChefProjet) ChefProjet;
    }

}
