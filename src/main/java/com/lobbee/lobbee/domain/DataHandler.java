package com.lobbee.lobbee.domain;

import com.lobbee.lobbee.domain.product.Category;
import com.lobbee.lobbee.domain.product.ProductDto;
import com.lobbee.lobbee.domain.product.ProductJsonDto;
import com.lobbee.lobbee.domain.store.LobbeeStoreStockDto;
import com.lobbee.lobbee.domain.store.LobbeeStoreStockJsonDto;
import com.lobbee.lobbee.domain.store.StoreDto;
import lombok.Value;

import java.util.Set;

@Value
public class DataHandler {
    private Set<StoreDto> stores;
    private Set<ProductJsonDto> products;
    private Set<Category> categories;
    private Set<LobbeeStoreStockJsonDto> stocks;
}
