package com.lobbee.lobbee.controller;

import com.google.common.collect.Sets;
import com.lobbee.lobbee.domain.product.Product;
import com.lobbee.lobbee.domain.product.repository.ProductRepository;
import com.lobbee.lobbee.domain.search.ProductResult;
import com.lobbee.lobbee.domain.search.SummaryResult;
import com.lobbee.lobbee.domain.search.SupplyQuery;
import com.lobbee.lobbee.domain.search.SupplyResult;
import com.lobbee.lobbee.domain.store.LobbeeStore;
import com.lobbee.lobbee.domain.store.StoreProductDto;
import com.lobbee.lobbee.domain.store.repository.LobbeeStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/search")
@CrossOrigin
class SearchController {

    @Autowired
    private LobbeeStoreRepository lobbeeStoreRepository;
    @Autowired
    private ProductRepository productRepository;

    SearchController() {}

    @PostMapping("/supply")
    @Transactional
    ResponseEntity<?> searchSupply(@RequestBody SupplyQuery query) {
        Stream<Product> productStream = query.getProductIds().stream()
                .map(pid -> productRepository.findOne(pid));
        List<SupplyResult> results = Arrays.asList(
                SupplyResult.builder()
                        .id(1)
                        .store(lobbeeStoreRepository.findOne(1L))
                        .distance(450)
                        .products(
                                productStream
                                        .map(p -> ProductResult.builder().product(p).price(7.0).rate(3).build())
                                        .collect(Collectors.toSet())
                        )
                        .summary(SummaryResult.builder().price(7.5).rate(4).build())
                        .build()
        );

        return ResponseEntity.ok(results);
    }

}
