package com.example.demo.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Blob;
import java.util.UUID;


@Entity
@Table(name="recommandation")
public class Recommandation {
    //@ApiModelProperty(notes="unique id of the project lead")
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id_rec;
    //@ApiModelProperty(notes="last name of the project lead")
    @Column(name="rec_name")
    private String rec_name;
    //@ApiModelProperty(notes="name of the project lead")
    @Column(name="rec_content")
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

