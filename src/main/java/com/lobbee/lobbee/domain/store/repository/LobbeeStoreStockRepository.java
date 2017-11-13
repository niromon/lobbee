package com.lobbee.lobbee.domain.store.repository;

import com.lobbee.lobbee.domain.store.LobbeeStoreStock;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "lobbeestorestock", path = "lobbeestorestock")
public interface LobbeeStoreStockRepository extends PagingAndSortingRepository<LobbeeStoreStock, Long> {}