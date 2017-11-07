package com.lobbee.lobbee.domain.product.repository;

import com.lobbee.lobbee.domain.product.Category;
import com.lobbee.lobbee.domain.product.Product;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "eager" , types = Category.class)
public interface EagerCategoryProjection {
    Long getId();
    String getName();
}