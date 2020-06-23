package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name="employe")
public class Employe {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name="id_emp")
		private long id_emp;
		@Column(name="nom_emp")
		private String nom_emp;
		@Column(name="prenom_emp")
		private String prenom_emp;
		@Column(name="email_emp")
		private String email_emp;
		@Column(name="password_emp")
		private String password_emp;
		@Column(name="etat_emp")
		private String etat_emp;	
		@Column(name="id_chef_projet")
		private long id_chef_projet;
		
		public Employe() {
			
		}
		public Employe(String nom_emp,String prenom_emp,String email_emp,String password_emp,String etat_emp,long id_chef_projet) {
			this.nom_emp=nom_emp;
			this.prenom_emp=prenom_emp;
			this.email_emp=email_emp;
			this.password_emp=password_emp;	
			this.id_chef_projet=id_chef_projet;
		}
		public String getNom_emp() {
			return nom_emp;
		}
		public void setNom_emp(String nom_emp) {
			this.nom_emp = nom_emp;
		}
		public String getPrenom_emp() {
			return prenom_emp;
		}
		public void setPrenom_emp(String prenom_emp) {
			this.prenom_emp = prenom_emp;
		}
		public String getEmail_emp() {
			return email_emp;
		}
		public void setEmail_emp(String email_emp) {
			this.email_emp = email_emp;
		}
		public String getPassword_emp() {
			return password_emp;
		}
		public void setPassword_emp(String password_emp) {
			this.password_emp = password_emp;
		}
		public String getEtat_emp() {
			return etat_emp;
		}
		public void setEtat_emp(String etat_emp) {
			this.etat_emp = etat_emp;
		}
		public long getId_chef_projet() {
			return id_chef_projet;
		}
		public void setId_chef_projet(long id_chef_projet) {
			this.id_chef_projet = id_chef_projet;
		}
		

	    

}
