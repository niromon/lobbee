package com.lobbee.lobbee.domain.product.repository;

import com.lobbee.lobbee.domain.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "product", path = "product")
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    Product findByName(String name);

    @RestResource(path = "nameContaining", rel = "nameContaining")
    Page findByNameContaining(@Param("name") String name, Pageable p);
}