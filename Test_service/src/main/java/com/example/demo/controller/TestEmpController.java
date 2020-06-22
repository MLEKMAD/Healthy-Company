package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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

import com.example.demo.model.TestEmp;
import com.example.demo.payload.UploadFileResponse;
import com.example.demo.service.TestEmpService;

import io.swagger.annotations.Api;
@Api( value="file employe Api ",description= "API pour les opérations sur les fichiers que va envoye le chef de projet.")
@RestController
public class TestEmpController {
    //private static final Logger logger = LoggerFactory.getLogger(TestController.class);

    @Autowired
    private TestEmpService dbFileEmpStorageService;
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping("/uploadFileEmp/{idChefProjet}")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file,@PathVariable("idemploye") long idemploye) {
        TestEmp dbFile = dbFileEmpStorageService.storeFile(file,idemploye);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(dbFile.getId_test())
                .toUriString();

        return new UploadFileResponse(dbFile.getTest_name(), fileDownloadUri,
                 file.getSize());
    }
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping("/uploadMultipleFilesEmp/{idemploye}")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, @PathVariable("idemploye") long idemploye) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file, idemploye))
                .collect(Collectors.toList());
    }
    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/downloadFileEmp/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable("fileId") String fileId) {
        // Load file from database
        TestEmp dbFile = dbFileEmpStorageService.getFileByid(fileId);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getTest_name() + "\"")
                .body(new ByteArrayResource(dbFile.getTest_content()));
    }
    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/downloadFileEmp/{id_emp}")
    public ResponseEntity<Resource> downloadFileById(@PathVariable("id_emp") String id_emp) {
        // Load file from database
        TestEmp dbFile = dbFileEmpStorageService.getFileByid(id_emp);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getTest_name() + "\"")
                .body(new ByteArrayResource(dbFile.getTest_content()));
    }
    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/downloadAllFileEmp")
    public ResponseEntity<Resource> downloadAllFile() {
        // Load file from database
        TestEmp dbFile = dbFileEmpStorageService.getAllFile();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getTest_name() + "\"")
                .body(new ByteArrayResource(dbFile.getTest_content()));
    }
}
