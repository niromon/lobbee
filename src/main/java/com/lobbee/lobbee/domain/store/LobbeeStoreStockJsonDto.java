package com.lobbee.lobbee.domain.store;

import lombok.Value;

@Value
public class LobbeeStoreStockJsonDto {
    private String storeName;
    private String productName;
    private Double price;
}
