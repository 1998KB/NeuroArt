package com.brainware.neuroArt.controller;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.emptyString;
import static org.hamcrest.Matchers.not;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class NeuroArtControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void unauthorizedGenerate() throws Exception {
        mockMvc.perform(post("/generate"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void okCheck() throws Exception {
        mockMvc.perform(get("/check"))
                .andExpect(status().isOk());
    }

    @Test
    void okGallery() throws Exception {
        mockMvc.perform(get("/gallery"))
                .andExpect(status().isOk())
                .andExpect(content().string(not(emptyString())));
    }
}
