package com.lobbee.lobbee.domain.product;

import lombok.Value;

@Value
public class ProductJsonDto {
    private Long id;
    private String name;
    private Double rate;
    private String category;
}
