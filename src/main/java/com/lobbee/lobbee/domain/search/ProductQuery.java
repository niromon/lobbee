package com.lobbee.lobbee.domain.search;

import lombok.Value;

import java.util.Set;

@Value
public class ProductQuery {
    private String name;
    private Long categoryId;
}
