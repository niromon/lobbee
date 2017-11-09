package com.lobbee.lobbee.domain.search;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class SummaryResult {
    private Integer rate;
    private Double price;
}
