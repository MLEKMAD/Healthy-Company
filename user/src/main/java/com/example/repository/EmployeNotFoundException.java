package com.example.repository;

public class EmployeNotFoundException extends Exception {
	

	private static final long serialVersionUID = 1L;

	public EmployeNotFoundException(long id) {
        super(String.format("Employe is not found with id : '%s'", id));
    }

    public EmployeNotFoundException(String name) {
        super(String.format("Employe is not found with name :"+ name));
    }
}
