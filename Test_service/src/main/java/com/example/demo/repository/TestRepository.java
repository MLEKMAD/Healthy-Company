package com.example.demo.repository;

import com.example.demo.model.Test;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<Test,Integer> {
    @Query(nativeQuery = true ,value =  "SELECT * FROM files c where c.id_chef_projet =:id_chef_projet")
    Optional<Test> findByIdChefProjet(@Param("id_chef_projet") String id_chef_projet);

    @Query(nativeQuery = true ,value =  "SELECT * FROM files f")
    Optional<Test> findFile();
}
