package com.lobbee.lobbee.domain.search;

import com.lobbee.lobbee.domain.store.StoreDto;
import lombok.Builder;
import lombok.Value;

import java.util.Set;

@Value @Builder
public class SupplyResult {
    private Integer id;
    private StoreDto store;
    private Integer distance;
    private Set<ProductResult> products;
    private SummaryResult summary;
}

