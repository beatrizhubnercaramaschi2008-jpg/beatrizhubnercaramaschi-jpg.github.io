package com.meublog.model;

import jakarta.persistence.*;

@Entity
public class User {

    @Id @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private String role; // "USER" ou "ADMIN"

    // Getters e Setters
}
