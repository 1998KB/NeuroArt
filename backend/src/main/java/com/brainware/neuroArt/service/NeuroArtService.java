package com.brainware.neuroArt.service;

import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.OpenApiImageDTO;
import com.brainware.neuroArt.model.repository.ClientRepository;
import com.brainware.neuroArt.model.repository.CollectionRepository;
import com.brainware.neuroArt.model.repository.ImageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@AllArgsConstructor
@Service
public class NeuroArtService {

    CollectionRepository collectionRepository;
    ImageRepository imageRepository;
    ClientRepository clientRepository;
    ObjectMapper mapper;

    public Client getCollectionOfUser() {
        return clientRepository.findById(1L).orElse(null);
    }

    public OpenApiImageDTO getImage(String prompt) throws ExecutionException, InterruptedException {
        if (prompt.isEmpty() || prompt.isBlank()) {
            throw new IllegalArgumentException("Prompt has to be valid");
        }
        HttpClient client = HttpClient.newHttpClient();
        String apiKey = System.getenv("OPENAI_KEY");
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.openai.com/v1/images/generations"))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(String.format("""
                        {
                            "prompt": "%s"
                        }
                        """,prompt)))
                .build();

        CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
        return responseFuture.thenApply(response -> {
            int statusCode = response.statusCode();
            if (statusCode != 200) {
                throw new IllegalArgumentException("OpenAPI is not available right now");
            }
            String responseBody = response.body();
            try {
                return mapper.readValue(responseBody, OpenApiImageDTO.class);
            } catch (IOException e) {
                throw new IllegalArgumentException("Something went wrong with fetching");
            }
        }).get();
    }
}