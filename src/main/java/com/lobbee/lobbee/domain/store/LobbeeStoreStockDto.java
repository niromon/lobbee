package com.lobbee.lobbee.domain.store;

import lombok.Value;

@Value
public class LobbeeStoreStockDto {
    private Long storeId;
    private Long productId;
    private Double price;
}
