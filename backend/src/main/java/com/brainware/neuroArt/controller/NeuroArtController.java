package com.brainware.neuroArt.controller;
import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.Image;
import com.brainware.neuroArt.model.OpenApiImageDTO;
import com.brainware.neuroArt.service.NeuroArtService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> getList(){
        Client client = neuroArtService.getCollectionOfUser();
        System.out.println(client);
        return new ResponseEntity<>("Hey!", HttpStatus.OK);
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateImage(@RequestBody String prompt){
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

    @PostMapping("/saveimage")
    public ResponseEntity<Image> saveImage(@RequestBody Image image){
        return new ResponseEntity<>(neuroArtService.saveImage(image), HttpStatus.CREATED);
    }

    @DeleteMapping("/saveimage")
    public void deleteImage(@RequestParam String id){
        neuroArtService.deleteImage(id);
    }

    @GetMapping("/gallery")
    public ResponseEntity<List<Image>> getGallery(){
        return new ResponseEntity<List<Image>>(neuroArtService.getAllImages(), HttpStatus.OK);
    }
}
