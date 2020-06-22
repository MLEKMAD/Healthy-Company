package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name="reponse")
public class Reponse {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_reponse")
	@ApiModelProperty(notes="unique id of the employe")
	private long id_reponse;
	@Column(name="id_questionnaire")
	@ApiModelProperty(notes="")
	private long id_questionnaire;
	@Column(name="reponse")
	@ApiModelProperty(notes="")
	private String reponse;
	@Column(name="id_emp")
	@ApiModelProperty(notes="unique id of the employe")
	private long id_emp;	
	
	public Reponse() {
		super();	
	}
	public Reponse(String reponse, long id_questionnaire,long id) {
		super();
		this.reponse = reponse;
		this.id_questionnaire = id_questionnaire;
		this.id_emp=id;
	}

	public long getId_reponse() {
		return id_reponse;
	}

	public void setId_reponse(long id_reponse) {
		this.id_reponse = id_reponse;
	}

	public long getId_questionnaire() {
		return id_questionnaire;
	}

	public long getId_emp() {
		return id_emp;
	}

	public void setId_emp(long id_emp) {
		this.id_emp = id_emp;
	}

	public void setId_questionnaire(long id_questionnaire) {
		this.id_questionnaire = id_questionnaire;
	}

	public String getReponse() {
		return reponse;
	}

	public void setReponse(String reponse) {
		this.reponse = reponse;
	}
	


}
