package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recommandation;
@Repository
public interface TestRecRepository extends JpaRepository<Recommandation,String>{

}
