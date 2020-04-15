package com.example.repository;

public class ChefProjetNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;

	public ChefProjetNotFoundException(long id_ched_projet) {
        super(String.format("Project lead is not found with id : '%s'", id_ched_projet));
    }

    public ChefProjetNotFoundException(String name_chef_projet) {
        super(String.format("Project lead is not found with name :"+ name_chef_projet));
    }
}
