package com.lobbee.lobbee.domain.product;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ProductJsonDto {
    private Long id;
    private String name;
    private Double rate;
    private String category;
}
