package com.example.demo.model;


import javax.persistence.*;

//import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name="files")
public class Test {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_file")
    private String id_test;
    @Column(name="name_file")
    private String test_name;
    @Column(name="content_file")
    private byte[] test_content;
    @Column(name = "id_chef_projet")
    private long id_chef_projet;

    public Test() {
    }

    public Test( String name, byte[] test, long id1 ){
        this.test_content = test;
        this.test_name = name;
        this.id_chef_projet = id1;

    }

    public long getId_chef_projet() {
        return id_chef_projet;
    }

    public void setId_chef_projet(long id_chef_projet) {
        this.id_chef_projet = id_chef_projet;
    }

    public String getId_test() {
        return id_test;
    }

    public void setId_test(String id_test) {
        this.id_test = id_test;
    }

    public String getTest_name() {
        return test_name;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    public byte[] getTest_content() {
        return test_content;
    }

    public void setTest_content(byte[] test_content) {
        this.test_content = test_content;
    }
    //getter and setter of test content
}

