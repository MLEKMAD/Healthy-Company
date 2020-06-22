package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Questionnaire;

public interface QuestionnaireRepository  extends CrudRepository<Questionnaire, Long>{
  /*
	@Query(nativeQuery = true ,value =  "SELECT * FROM questionnaire c where c.id_chef_projet =:id_chef_projet")
    Optional<Questionnaire> findByQuestionByIdChef(@Param("idChefprojet") long idchefprojet);
*/
}