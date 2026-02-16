package com.meublog.controller;

import com.meublog.model.Story;
import com.meublog.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class StoryController {

    @Autowired
    private StoryRepository storyRepository;

    @GetMapping("/stories")
    public String stories(Model model) {
        model.addAttribute("stories", storyRepository.findAll());
        return "stories";
    }

    @GetMapping("/story/{id}")
    public String story(@PathVariable Long id, Model model) {
        Story story = storyRepository.findById(id).orElse(null);
        model.addAttribute("story", story);
        return "story";
    }
}
