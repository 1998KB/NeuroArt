package com.brainware.neuroArt.service;

import com.brainware.neuroArt.model.Client;
import com.brainware.neuroArt.model.repository.ClientRepository;
import com.brainware.neuroArt.model.repository.CollectionRepository;
import com.brainware.neuroArt.model.repository.ImageRepository;
import org.springframework.stereotype.Service;

@Service
public class NeuroArtService {

    CollectionRepository collectionRepository;
    ImageRepository imageRepository;
    ClientRepository clientRepository;

    public NeuroArtService(CollectionRepository collectionRepository,
                           ImageRepository imageRepository,
                           ClientRepository clientRepository) {
        this.collectionRepository = collectionRepository;
        this.imageRepository = imageRepository;
        this.clientRepository = clientRepository;
    }

    public Client getCollectionOfUser() {
        return clientRepository.findById(1L).orElse(null);
    }
}