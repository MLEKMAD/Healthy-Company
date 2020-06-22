package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Questionnaire;
import com.example.demo.models.Reponse;

public interface ReponseRepository  extends CrudRepository<Reponse, Long>{
    @Query(nativeQuery = true ,value =  "SELECT * FROM reponse c where c.id_questionnaire =:id_questionnaire")
    Optional<Questionnaire> findReponseByIdQuest(@Param("id_questionnaire") long id_questionnaire);

}
