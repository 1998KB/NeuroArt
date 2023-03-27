package com.brainware.neuroArt.controller;
import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.Collection;
import com.brainware.neuroArt.service.NeuroArtService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class NeuroArtController {
    NeuroArtService neuroArtService;

    @GetMapping("/check")
    public ResponseEntity<String> getList(){
        Client client = neuroArtService.getCollectionOfUser();
        System.out.println(client);
        return new ResponseEntity<>("Hey, checking if restart works!", HttpStatus.OK);
    }

}