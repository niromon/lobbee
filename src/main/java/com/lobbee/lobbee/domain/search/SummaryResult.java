package com.lobbee.lobbee.domain.search;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class SummaryResult {
    private Double rate;
    private Double price;
}
