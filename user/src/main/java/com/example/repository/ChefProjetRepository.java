package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.Models.ChefProjet;

public interface ChefProjetRepository extends CrudRepository<ChefProjet, Long>{
    @Query("SELECT * FROM chef_projet c where c.email_chef_projet =:email and c.password_chef_projet =:password")
    Optional<ChefProjet> findByEmailPassword(@Param("email") String name,@Param("password") String password);

    @Query("SELECT * FROM chef_projet c where c.nom_chef_projet =:nom")
    Optional<ChefProjet> findByName(@Param("nom") String s);
}
