package com.example.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import io.swagger.annotations.ApiModelProperty;

@Entity
public class ChefProjet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@ApiModelProperty(notes="unique id of the project lead")
	private long id_Chef_Pojet;
	//@ApiModelProperty(notes="last name of the project lead")
	private String nom_Chef_Pojet;
	//@ApiModelProperty(notes="name of the project lead")
	private String prenom_Chef_Pojet;
	//@ApiModelProperty(notes="email of the project lead")
	private String email_Chef_Pojet;
	//@ApiModelProperty(notes="password of the project lead")
	private String password_Chef_Pojet;
	
	public ChefProjet() {
		
	}
	
	public ChefProjet(long id_Chef_Pojet,String nom_Chef_Pojet,String prenom_Chef_Pojet,String email_Chef_Pojet) {
		this.id_Chef_Pojet=id_Chef_Pojet;
		this.nom_Chef_Pojet=nom_Chef_Pojet;
		this.prenom_Chef_Pojet=prenom_Chef_Pojet;
		this.email_Chef_Pojet=email_Chef_Pojet;
	}
	
	public ChefProjet(long id_Chef_Pojet,String nom_Chef_Pojet,String prenom_Chef_Pojet,String email_Chef_Pojet,String password_Chef_Pojet) {
		this.id_Chef_Pojet=id_Chef_Pojet;
		this.nom_Chef_Pojet=nom_Chef_Pojet;
		this.prenom_Chef_Pojet=prenom_Chef_Pojet;
		this.email_Chef_Pojet=email_Chef_Pojet;
		this.password_Chef_Pojet=password_Chef_Pojet;
	}
	
	public long getId_Chef_Pojet() {
		return id_Chef_Pojet;
	}
	public void setId_Chef_Pojet(long id_Chef_Pojet) {
		this.id_Chef_Pojet = id_Chef_Pojet;
	}
	public String getNom_Chef_Pojet() {
		return nom_Chef_Pojet;
	}
	public void setNom_Chef_Pojet(String nom_Chef_Pojet) {
		this.nom_Chef_Pojet = nom_Chef_Pojet;
	}
	public String getPrenom_Chef_Pojet() {
		return prenom_Chef_Pojet;
	}
	public void setPrenom_Chef_Pojet(String prenom_Chef_Pojet) {
		this.prenom_Chef_Pojet = prenom_Chef_Pojet;
	}
	public String getEmail_Chef_Pojet() {
		return email_Chef_Pojet;
	}
	public void setEmail_Chef_Pojet(String email_Chef_Pojet) {
		this.email_Chef_Pojet = email_Chef_Pojet;
	}
	public String getPassword_Chef_Pojet() {
		return password_Chef_Pojet;
	}
	public void setPassword_Chef_Pojet(String password_Chef_Pojet) {
		this.password_Chef_Pojet = password_Chef_Pojet;
	}
	

}
