package com.lobbee.lobbee.domain.product;

import lombok.Value;

@Value
public class ProductDto {
    private Long id;
    private String name;
    private Long categoryId;

}
