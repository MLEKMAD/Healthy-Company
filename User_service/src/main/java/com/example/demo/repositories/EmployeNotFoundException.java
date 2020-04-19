package com.example.demo.repositories;

public class EmployeNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;

	public EmployeNotFoundException(long id_employe) {
        super(String.format("employe is not found with id : '%s'", id_employe));
    }

    public EmployeNotFoundException(String name_employe) {
        super(String.format("employe is not found with name :"+ name_employe));
    }


}
