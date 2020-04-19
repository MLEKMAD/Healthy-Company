package com.example.demo.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Employe;

public interface EmployeRepository extends CrudRepository<Employe, Long> {
    @Query(nativeQuery = true ,value =  "SELECT * FROM employe c where c.email_employe =:email and c.password_employe =:password")
    Optional<Employe> findByEmailPassword(@Param("email") String name,@Param("password") String password);

    @Query(nativeQuery = true ,value ="SELECT * FROM employe c where c.nom_employe =:nom")
    Optional<Employe> findByName(@Param("nom") String s);
}
