package com.lobbee.lobbee.domain.store.repository;

import com.lobbee.lobbee.domain.product.Category;
import com.lobbee.lobbee.domain.store.LobbeeStore;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "lobbeestore", path = "lobbeestore")
public interface LobbeeStoreRepository extends PagingAndSortingRepository<LobbeeStore, Long> {
    LobbeeStore findByName(String name);
}