package com.lobbee.lobbee.domain.search;

import com.lobbee.lobbee.domain.product.Product;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ProductResult {
    private Product product;
    private Double rate;
    private Double price;
}
