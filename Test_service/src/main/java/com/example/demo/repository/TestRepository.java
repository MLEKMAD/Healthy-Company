package com.example.demo.repository;

import com.example.demo.exception.FileStorageException;
import com.example.demo.exception.MyFileNotFoundException;
import com.example.demo.model.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Repository
public interface TestRepository extends JpaRepository<Test,String> {


}
