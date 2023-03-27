package com.brainware.neuroArt.model.repository;

import com.brainware.neuroArt.model.Collection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionRepository extends CrudRepository<Collection, Long> {
}
