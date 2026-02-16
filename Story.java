package com.meublog.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Story {

    @Id @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private String imageUrl;

    @OneToMany(mappedBy = "story", cascade = CascadeType.ALL)
    private List<Chapter> chapters;

    // Getters e Setters
}
