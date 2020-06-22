package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recommandation;
import com.example.demo.model.TestEmp;
@Repository
public interface TestEmpRepository extends JpaRepository<TestEmp,String>{
    @Query(nativeQuery = true ,value =  "SELECT * FROM file_employe c where c.id_emp =:id_emp")
    Optional<TestEmp> findByIdChefProjet(@Param("id_emp") String id_emp);

    @Query(nativeQuery = true ,value =  "SELECT * FROM file_employe")
    Optional<TestEmp> findFileEmp();
}
