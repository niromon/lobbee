package com.lobbee.lobbee.controller;

import com.google.common.base.Preconditions;
import com.google.common.collect.Iterables;
import com.lobbee.lobbee.domain.product.repository.ProductRepository;
import com.lobbee.lobbee.domain.search.ProductResult;
import com.lobbee.lobbee.domain.search.SummaryResult;
import com.lobbee.lobbee.domain.search.SupplyQuery;
import com.lobbee.lobbee.domain.search.SupplyResult;
import com.lobbee.lobbee.domain.store.LobbeeStore;
import com.lobbee.lobbee.domain.store.LobbeeStoreStock;
import com.lobbee.lobbee.domain.store.repository.LobbeeStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static com.google.common.collect.Lists.*;

@RestController
@RequestMapping("/search")
@CrossOrigin
class SearchController {

    @Autowired
    private LobbeeStoreRepository lobbeeStoreRepository;
    @Autowired
    private ProductRepository productRepository;

    @PersistenceContext
    private EntityManager entityManager;

    SearchController() {}

    @PostMapping("/supply")
    @Transactional
    ResponseEntity<?> searchSupply(@RequestBody SupplyQuery query) {
        Preconditions.checkArgument(!Iterables.isEmpty(query.getProductIds()));

        List<LobbeeStore> storesInvolved = entityManager.createQuery(
            "select distinct s" +
                " from LobbeeStore s " +
                " join s.stocks p " +
                " where p.product.id in (:productids)", LobbeeStore.class)
            .setParameter("productids", query.getProductIds())
            .getResultList();

        if (Iterables.isEmpty(storesInvolved)) {
            return ResponseEntity.ok(newArrayList());
        }

        List<SupplyResult> results = storesInvolved.stream().map(store ->
            SupplyResult.builder()
                .id(1)
                .store(store.toDto())
                .distance(450)
                .products(
                    getStocks(query, store)
                        .map(p -> ProductResult.builder()
                                    .product(p.getProduct())
                                    .price(p.getPrice())
                                    .rate(p.getProduct().getRate())
                                .build()
                        ).collect(Collectors.toSet())
                ).summary(SummaryResult.builder()
                            .price(getStocks(query, store).mapToDouble(s -> s.getPrice()).sum())
                            .rate(getStocks(query, store).mapToDouble(s -> s.getProduct().getRate()).average().getAsDouble())
                        .build())
            .build()
        ).collect(Collectors.toList());

        return ResponseEntity.ok(results);
    }

    private Stream<LobbeeStoreStock> getStocks(@RequestBody SupplyQuery query, LobbeeStore store) {
        return store.getStocks().stream()
            .filter(s -> query.getProductIds().contains(s.getProduct().getId()));
    }

}
