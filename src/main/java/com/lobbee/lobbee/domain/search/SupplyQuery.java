package com.lobbee.lobbee.domain.search;

import lombok.Value;

import java.util.Set;

@Value
public class SupplyQuery {
    private Set<Long> productIds;
}
