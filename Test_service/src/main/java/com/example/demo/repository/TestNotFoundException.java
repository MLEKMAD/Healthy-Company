package com.example.demo.repository;

public class TestNotFoundException extends Exception {
    private static final long serialVersionUID = 1L;

    public TestNotFoundException(long id_test) {
        super(String.format("Project lead is not found with id : '%s'", id_test));
    }

    public TestNotFoundException(String test_name) {
        super(String.format("Project lead is not found with name :"+ test_name));
    }
}
