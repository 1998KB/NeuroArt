package com.brainware.neuroArt.service;

import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.Image;
import com.brainware.neuroArt.model.ImageDTO;
import com.brainware.neuroArt.model.UrlData;
import com.brainware.neuroArt.model.repository.ClientRepository;
import com.brainware.neuroArt.model.repository.CollectionRepository;
import com.brainware.neuroArt.model.repository.ImageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.apache.catalina.mapper.Mapper;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
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

    public String getImage(String prompt) throws ExecutionException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        String apiKey = System.getenv("OPENAI_KEY");
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.openai.com/v1/images/generations"))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .method("POST", HttpRequest.BodyPublishers.ofString(prompt))
                .build();

        CompletableFuture<HttpResponse<String>> responseFuture = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
        return responseFuture.thenApply(response -> {
            int statusCode = response.statusCode();
            HttpHeaders headers = response.headers();
            String responseBody = response.body();
            System.out.println("Status Code: " + statusCode);
            System.out.println("Headers: " + headers);
            System.out.println("Response Body: " + responseBody);

            try {
                ImageDTO responseObj = mapper.readValue(responseBody, ImageDTO.class);
                System.out.println("Created: " + responseObj.created());
                String data = responseObj.data()[0].url();
                System.out.println("url= " + data);
                return data;
            } catch (IOException e) {
                System.out.println("Error deserializing response body: " + e.getMessage());
            }
            return null;
        }).get();
    }
}