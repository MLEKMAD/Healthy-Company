package com.example.demo.model;

import javax.persistence.*;

//import io.swagger.annotations.ApiModelProperty;


@Entity
@Table(name="files_recommandation")
public class Recommandation {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_recommandation")
    private String id_rec;
    @Column(name="name_recommandation")
    private String rec_name;
    @Column(name="content_recommandation")
    private byte[] rec_content;
    @Column(name = "id_chef_projet")
    private long id_chef_projet;

    public Recommandation() {
    }

    public Recommandation( String name, byte[] test, long id1 ){
        this.rec_content = test;
        this.rec_name = name;
        this.id_chef_projet = id1;

    }

    public long getId_chef_projet() {
        return id_chef_projet;
    }

    public void setId_chef_projet(long id_chef_projet) {
        this.id_chef_projet = id_chef_projet;
    }

    public String getId_rec() {
        return id_rec;
    }

    public void setId_rec(String id_rec) {
        this.id_rec = id_rec;
    }

    public String getRec_name() {
        return rec_name;
    }

    public void setRec_name(String rec_name) {
        this.rec_name = rec_name;
    }

    public byte[] getRec_content() {
        return rec_content;
    }

    public void setRec_content(byte[] rec_content) {
        this.rec_content = rec_content;
    }
}

