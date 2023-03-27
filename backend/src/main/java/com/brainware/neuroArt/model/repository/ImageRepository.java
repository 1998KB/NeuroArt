package com.brainware.neuroArt.model.repository;

import com.brainware.neuroArt.model.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, String> {
}
