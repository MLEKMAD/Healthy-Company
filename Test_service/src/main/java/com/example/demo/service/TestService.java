package com.example.demo.service;

import com.example.demo.exception.FileStorageException;
import com.example.demo.exception.MyFileNotFoundException;
import com.example.demo.model.Test;
import com.example.demo.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service

public class TestService  {

    @Autowired
    private TestRepository dbFileRepository;

    public Test storeFile(MultipartFile file , long idChefProjet) {
        // Normalize file getOriginalFilename
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());


        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Test dbFile = new Test(fileName, file.getBytes(),idChefProjet);

            return dbFileRepository.save(dbFile);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public Test getFile(String fileId) {
        return dbFileRepository.findById(fileId)
                .orElseThrow(() -> new MyFileNotFoundException("File not found with id " + fileId));
    }
    public Test getAllFile() {
        return dbFileRepository.findFile()
                .orElseThrow(() -> new MyFileNotFoundException("File not found with id "));
    }
    
}
