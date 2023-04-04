package com.brainware.neuroArt.controller;

import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.repository.ClientRepository;
import com.brainware.neuroArt.model.repository.CollectionRepository;
import com.brainware.neuroArt.model.repository.ImageRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class NeuroArtControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    CollectionRepository collectionRepository;

    @Autowired
    ImageRepository imageRepository;

    @AfterEach
    void cleanup() {
        clientRepository.deleteAll();
        collectionRepository.deleteAll();
        imageRepository.deleteAll();
    }

    @Test
    void shouldThrowUnauthorizedOnGenerate() throws Exception {
        mockMvc.perform(post("/generate"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void shouldReturnEmptyListOnGallery() throws Exception {
        mockMvc.perform(get("/gallery"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    void shouldCreateUserWhenNotExisting() throws Exception {
        mockMvc.perform(post("/user")
                .with(SecurityMockMvcRequestPostProcessors.jwt().jwt(jwt -> jwt
                        .claim("sub", "123")
                        .claim("given_name", "Lukas")
                        .claim("email", "email@email.com")
                        .claim("picture", "url://picture"))))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                          "username": "Lukas",
                          "collectionList": [
                            {
                              "description": "My first collection",
                              "images": []
                            }
                          ],
                          "email": "email@email.com",
                          "picture": "url://picture"
                        }
                        """));
    }

    @Test
    void shouldReturn204Delete() throws Exception {
        mockMvc.perform(delete("/image/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt().jwt(jwt -> jwt
                                .claim("sub", "123"))))
                .andExpect(status().isNoContent())
                .andExpect(content().string(""));
    }

    @Test
    void shouldReturn400WhenGetImageNotExisting() throws Exception {
        mockMvc.perform(get("/image/1"))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Image with given id not found!"));
    }

//    @Test
    void shouldGenerateImage() throws Exception {
        // given
        createClient();

        mockMvc.perform(post("/generate")
                .contentType(MediaType.TEXT_PLAIN)
                .content("aswdw")
                .with(SecurityMockMvcRequestPostProcessors.jwt().jwt(jwt -> jwt
                        .claim("sub", "123"))))
                .andExpect(status().isCreated())
                .andExpect(content().string(""));
    }

    private void createClient() throws Exception {
        mockMvc.perform(post("/user")
                .with(SecurityMockMvcRequestPostProcessors.jwt().jwt(jwt -> jwt
                        .claim("sub", "123")
                        .claim("given_name", "Lukas")
                        .claim("email", "email@email.com")
                        .claim("picture", "url://picture"))));
    }
}
