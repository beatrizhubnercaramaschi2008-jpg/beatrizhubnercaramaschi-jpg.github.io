package com.meublog.model;

import jakarta.persistence.*;

@Entity
public class Chapter {

    @Id @GeneratedValue
    private Long id;
    private String title;
    private String pdfUrl; // link para o PDF

    @ManyToOne
    private Story story;

    // Getters e Setters
}
