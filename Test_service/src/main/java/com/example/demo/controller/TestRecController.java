package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.model.Recommandation;
import com.example.demo.payload.UploadFileResponse;
import com.example.demo.service.TestRecService;

import io.swagger.annotations.Api;

@Api( value="file Api ",description= "API pour les opérations sur les fichiers type recommandation que va envoye le chef de projet.")
@RestController
public class TestRecController {

	  //private static final Logger logger = LoggerFactory.getLogger(TestController.class);

	    @Autowired
	    private TestRecService dbFileStorageService;
	    @CrossOrigin(origins="http://localhost:3000")
	    @PostMapping("/uploadFileRec/{idChefProjet}")
	    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file,@PathVariable("idChefProjet") long idChefProjet) {
	        Recommandation dbFile = dbFileStorageService.storeFile(file,idChefProjet);

	        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
	                .path("/downloadFile/")
	                .path(dbFile.getId_rec())
	                .toUriString();

	        return new UploadFileResponse(dbFile.getRec_name(), fileDownloadUri,
	                 file.getSize());
	    }
	    @CrossOrigin(origins="http://localhost:3000")
	    @PostMapping("/uploadMultipleFilesRec/{idchefProjet}")
	    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, @PathVariable("idchefProjet") long idChefProjet) {
	        return Arrays.asList(files)
	                .stream()
	                .map(file -> uploadFile(file, idChefProjet))
	                .collect(Collectors.toList());
	    }
	    @CrossOrigin(origins="http://localhost:3000")
	    @GetMapping("/downloadFileRec/{fileId}")
	    public ResponseEntity<Resource> downloadFile(@PathVariable("fileId") String fileId) {
	        // Load file from database
	    	Recommandation dbFile = dbFileStorageService.getFile(fileId);

	        return ResponseEntity.ok()
	                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getRec_name() + "\"")
	                .body(new ByteArrayResource(dbFile.getRec_content()));
	    }
	    @CrossOrigin(origins="http://localhost:3000")
	    @GetMapping("/downloadAllFileRec")
	    public ResponseEntity<Resource> downloadAllFile() {
	        // Load file from database
	    	Recommandation dbFile = dbFileStorageService.getAllFile();

	        return ResponseEntity.ok()
	                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getRec_name() + "\"")
	                .body(new ByteArrayResource(dbFile.getRec_content()));
	    }

}
