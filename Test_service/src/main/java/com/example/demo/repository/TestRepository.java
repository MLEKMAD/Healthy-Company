package com.example.demo.repository;

import com.example.demo.model.Test;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<Test,String> {


}
