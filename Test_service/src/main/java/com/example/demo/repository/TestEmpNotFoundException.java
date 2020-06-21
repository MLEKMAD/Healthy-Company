package com.example.demo.repository;

public class TestEmpNotFoundException extends Exception {
    private static final long serialVersionUID = 1L;

    public TestEmpNotFoundException(long id_test) {
        super(String.format("Project lead is not found with id : '%s'", id_test));
    }

    public TestEmpNotFoundException(String test_name) {
        super(String.format("Project lead is not found with name :"+ test_name));
    }
}