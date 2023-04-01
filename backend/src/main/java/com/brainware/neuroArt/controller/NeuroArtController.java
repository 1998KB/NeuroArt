package com.brainware.neuroArt.controller;
import com.brainware.neuroArt.controller.dto.ImageDTO;
import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.Image;
import com.brainware.neuroArt.service.NeuroArtService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@AllArgsConstructor
@CrossOrigin({"http://localhost:3000", "https://blue-sky-0e47a0403.2.azurestaticapps.net"})
public class NeuroArtController {

    NeuroArtService neuroArtService;

    @GetMapping("/check")
    public ResponseEntity<String> getList() {
        Client client = neuroArtService.getCollectionOfUser();
        System.out.println(client);
        return new ResponseEntity<>("Hey!", HttpStatus.OK);
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateImage(@RequestBody String prompt) {
        String imageUrl;
        try {
            imageUrl = neuroArtService.getImageUrl(prompt);
        } catch (ExecutionException | InterruptedException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "Something went wrong");
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
        return new ResponseEntity<>(imageUrl, HttpStatus.OK);
    }

    @PostMapping("/image")
    public ResponseEntity<Image> saveImage(@RequestBody ImageDTO imageDTO) {
        return new ResponseEntity<>(neuroArtService.saveImage(imageDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/image/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteImage(@PathVariable String id) {
        if (id == null || id.isEmpty() || id.isBlank()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Provided id has to be valid");
        }
        neuroArtService.deleteImage(id);
    }
    
    @GetMapping("/gallery")
    public ResponseEntity<List<Image>> getGallery() {
        return new ResponseEntity<>(neuroArtService.getAllImages(), HttpStatus.OK);
    }

    private String getSub() {
        return ((Jwt)SecurityContextHolder.getContext().getAuthentication().getPrincipal())
                .getClaims().get("sub").toString();
    }
}
