package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employe")
public class Employe {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="id_emp")
		//@ApiModelProperty(notes="unique id of the employe")
		private long id_emp;
		@Column(name="nom_emp")
		//@ApiModelProperty(notes="last name of the employe")
		private String nom_emp;
		@Column(name="prenom_emp")
		//@ApiModelProperty(notes="name of the employe")
		private String prenom_emp;
		@Column(name="email_emp")
		//@ApiModelProperty(notes="email of the employe")
		private String email_emp;
		@Column(name="password_emp")
		//@ApiModelProperty(notes="password of the employe")
		private String password_emp;
		@Column(name="etat_emp")
		//@ApiModelProperty(notes="state of the employe")
		private String etat_emp;	
		
		@Column(name="id_chef_projet")
		//@ApiModelProperty(notes="data of project lead of the employe")
		private long id_chef_projet;
		
		public Employe() {
			
		}
		public Employe(long id_emp,String nom_emp,String prenom_emp,String email_emp,String password_emp,String etat_emp,long id_chef_projet) {
			this.id_emp=id_emp;
			this.setNom_emp(nom_emp);
			this.setPrenom_emp(prenom_emp);
			this.email_emp=email_emp;
			this.password_emp=password_emp;	
			this.id_chef_projet=id_chef_projet;
		}
		
	   /* 
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	        return null;
	    }
	*/
	    
	    public String getPassword() {
	        return this.password_emp;
	    }

	    public String getUsername() {
	        return this.email_emp;
	    }

		public String getEtat_emp() {
			return etat_emp;
		}
		public void setEtat_emp(String etat_emp) {
			this.etat_emp = etat_emp;
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

}
