package com.meublog.controller;

import com.meublog.model.Story;
import com.meublog.model.Chapter;
import com.meublog.repository.StoryRepository;
import com.meublog.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private ChapterRepository chapterRepository;

    @GetMapping
    public String adminPanel(Model model) {
        model.addAttribute("stories", storyRepository.findAll());
        return "admin";
    }

    @PostMapping("/createStory")
    public String createStory(@RequestParam String title,
                              @RequestParam String description,
                              @RequestParam String imageUrl) {
        Story story = new Story();
        story.setTitle(title);
        story.setDescription(description);
        story.setImageUrl(imageUrl);
        storyRepository.save(story);
        return "redirect:/admin";
    }

    @PostMapping("/createChapter")
    public String createChapter(@RequestParam Long storyId,
                                @RequestParam String title,
                                @RequestParam String pdfUrl) {
        Story story = storyRepository.findById(storyId).orElse(null);
        if(story != null){
            Chapter chapter = new Chapter();
            chapter.setTitle(title);
            chapter.setPdfUrl(pdfUrl);
            chapter.setStory(story);
            chapterRepository.save(chapter);
        }
        return "redirect:/admin";
    }
}
