package com.lobbee.lobbee.domain.product;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ProductDto {
    private Long id;
    private String name;
    private Double rate;
    private Long categoryId;
}
