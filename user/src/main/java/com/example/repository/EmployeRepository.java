package com.example.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Models.Employe;

import java.util.Optional;

@Repository
public interface EmployeRepository extends CrudRepository<Employe,Long>{

	
    @Query("SELECT * FROM Employe c where c.email_emp =:email and c.password_emp =:password")
    Optional<Employe> findByEmailPassword(@Param("email") String name,@Param("password") String password);

    @Query("SELECT * FROM Employe c where c.nom_emp =:nom")
    Optional<Employe> findByName(@Param("nom") String s);
}
