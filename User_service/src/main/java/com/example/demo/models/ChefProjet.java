package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name="chef_projet")
public class ChefProjet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_chef_projet")
	private long id_chef_projet;
	@Column(name="nom_chef_projet")
	private String nom_chef_projet;
	@Column(name="prenom_chef_projet")
	private String prenom_chef_projet;
	@Column(name="email_chef_projet")
	private String email_chef_projet;
	@Column(name="password_chef_projet")
	private String password_chef_projet;
	
	public ChefProjet() {
		
	}
	

	
	public ChefProjet(String nom_chef_projet, String prenom_chef_projet, String email_chef_projet,String password_chef_projet) {
		this.nom_chef_projet = nom_chef_projet;
		this.prenom_chef_projet = prenom_chef_projet;
		this.email_chef_projet = email_chef_projet;
		this.password_chef_projet = password_chef_projet;
	}



	public String getNom_chef_projet() {
		return nom_chef_projet;
	}



	public void setNom_chef_projet(String nom_chef_projet) {
		this.nom_chef_projet = nom_chef_projet;
	}



	public String getPrenom_chef_projet() {
		return prenom_chef_projet;
	}



	public void setPrenom_chef_projet(String prenom_chef_projet) {
		this.prenom_chef_projet = prenom_chef_projet;
	}



	public String getEmail_chef_projet() {
		return email_chef_projet;
	}



	public void setEmail_chef_projet(String email_chef_projet) {
		this.email_chef_projet = email_chef_projet;
	}



	public String getPassword_chef_projet() {
		return password_chef_projet;
	}



	public void setPassword_chef_projet(String password_chef_projet) {
		this.password_chef_projet = password_chef_projet;
	}





}
