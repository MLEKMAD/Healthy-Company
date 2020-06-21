package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="file_employe")
public class TestEmp {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_file")
    private String id_test;
    @Column(name="name_file")
    private String test_name;
    @Column(name="content_file")
    private byte[] test_content;
    @Column(name = "id_emp")
    private long id_emp;

    public TestEmp() {
    }

    public TestEmp( String name, byte[] test, long id1 ){
        this.test_content = test;
        this.test_name = name;
        this.id_emp = id1;

    }

    public long getId_emp() {
        return id_emp;
    }

    public void setId_emp(long id_emp) {
        this.id_emp = id_emp;
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
}
