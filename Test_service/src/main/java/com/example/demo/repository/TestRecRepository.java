package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recommandation;
@Repository
public interface TestRecRepository extends JpaRepository<Recommandation,String>{
    @Query(nativeQuery = true ,value =  "SELECT * FROM files_recommandation c where c.id_chef_projet =:id_chef_projet")
    Optional<Recommandation> findByIdChefProjet(@Param("id_chef_projet") String id_chef_projet);

    @Query(nativeQuery = true ,value =  "SELECT * FROM files_recommandation")
    Optional<Recommandation> findFileRec();
}
