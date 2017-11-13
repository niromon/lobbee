package com.lobbee.lobbee.controller;

import com.lobbee.lobbee.domain.product.Product;
import com.lobbee.lobbee.domain.product.repository.ProductRepository;
import com.lobbee.lobbee.domain.store.LobbeeStore;
import com.lobbee.lobbee.domain.store.LobbeeStoreStock;
import com.lobbee.lobbee.domain.store.LobbeeStoreStockDto;
import com.lobbee.lobbee.domain.store.repository.LobbeeStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/store")
@CrossOrigin
class StoreController {

	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private LobbeeStoreRepository storeRepository;

    StoreController() {}

	@PostMapping("/add")
	@Transactional
	ResponseEntity<?> add(@RequestBody LobbeeStoreStockDto storeProduct) {
		LobbeeStore store = storeRepository.findOne(storeProduct.getStoreId());
		Product product = productRepository.findOne(storeProduct.getProductId());
//		store.getProducts().add(product);
		store.getStocks().add(LobbeeStoreStock.of(store, product, 10.0));
        return ResponseEntity.ok(store);
	}

}