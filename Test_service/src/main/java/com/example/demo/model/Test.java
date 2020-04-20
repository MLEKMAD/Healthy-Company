package com.example.demo.model;

import javax.persistence.*;
import java.sql.Blob;
import java.util.UUID;


@Entity
@Table(name="Test")
public class Test {
    //@ApiModelProperty(notes="unique id of the project lead")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_test")
    private long id_test;
    //@ApiModelProperty(notes="last name of the project lead")
    @Column(name="test_name")
    private String test_name;
    //@ApiModelProperty(notes="name of the project lead")
    @Column(name="test_content")
    private byte[] test_content;
    @Column(name = "id_chef_projet")
    private long id_chef_projet;

    public Test() {
    }

    public Test(long id, String name, byte[] test, long id1 ){
        this.id_test = id;
        this.test_content = test;
        this.test_name = name;
        this.id_chef_projet = id1;

    }

    public long getId_test() {
        return id_test;
    }

    public void setId_test(long id_test) {
        this.id_test = id_test;
    }

    public String getTest_name() {
        return test_name;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    //getter and setter of test content
}

