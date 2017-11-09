package com.lobbee.lobbee.domain.search;

import com.lobbee.lobbee.domain.product.Product;
import com.lobbee.lobbee.domain.store.LobbeeStore;
import lombok.Builder;
import lombok.Value;

import java.util.Set;

@Value @Builder
public class SupplyResult {
    private Integer id;
    private LobbeeStore store;
    private Integer distance;
    private Set<ProductResult> products;
    private SummaryResult summary;
}

