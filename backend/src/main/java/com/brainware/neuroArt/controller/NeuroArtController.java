package com.brainware.neuroArt.controller;
import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.OpenApiImageDTO;
import com.brainware.neuroArt.service.NeuroArtService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.concurrent.ExecutionException;

@RestController
@AllArgsConstructor
public class NeuroArtController {
    NeuroArtService neuroArtService;

    @GetMapping("/check")
    public ResponseEntity<String> getList(){
        Client client = neuroArtService.getCollectionOfUser();
        System.out.println(client);
        return new ResponseEntity<>("Hey!", HttpStatus.OK);
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateImage(HttpServletResponse response, @RequestBody String prompt){
        response.setHeader("Access-Control-Allow-Origin",
                "https://blue-sky-0e47a0403.2.azurestaticapps.net/generate");
        OpenApiImageDTO openApiImageDTO;
        try {
            openApiImageDTO = neuroArtService.getImage(prompt);
        } catch (ExecutionException | InterruptedException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "Something went wrong");
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
        return new ResponseEntity<>(openApiImageDTO.data()[0].url(), HttpStatus.OK);
    }

}