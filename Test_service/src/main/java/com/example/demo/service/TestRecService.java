package com.example.demo.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.exception.FileStorageException;
import com.example.demo.exception.MyFileNotFoundException;
import com.example.demo.model.Recommandation;
import com.example.demo.model.Test;
import com.example.demo.repository.TestRecRepository;

@Service
public class TestRecService {

    @Autowired
    private TestRecRepository dbFileRecRepository;

    public Recommandation storeFile(MultipartFile file , long idChefProjet) {
        // Normalize file getOriginalFilename
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());


        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Recommandation dbFile = new Recommandation(fileName, file.getBytes(),idChefProjet);

            return dbFileRecRepository.save(dbFile);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public Recommandation getFile(String fileId) {
        return dbFileRecRepository.findByIdChefProjet(fileId)
                .orElseThrow(() -> new MyFileNotFoundException("File not found with id " + fileId));
    }
    public Recommandation getAllFile() {
        return dbFileRecRepository.findFileRec()
                .orElseThrow(() -> new MyFileNotFoundException("File not found with id "));
    }
    
}
