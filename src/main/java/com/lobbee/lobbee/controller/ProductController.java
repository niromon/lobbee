package com.lobbee.lobbee.controller;

import com.lobbee.lobbee.domain.product.Product;
import com.lobbee.lobbee.domain.product.ProductDto;
import com.lobbee.lobbee.domain.product.repository.CategoryRepository;
import com.lobbee.lobbee.domain.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@CrossOrigin
class ProductController {

	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;

	@Autowired
	ProductController(ProductRepository productRepository, CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}

	@PostMapping("/add")
	ResponseEntity<?> add(@RequestBody ProductDto product) {
        Product entity = Product.fromDto(product, categoryRepository);
        Product saved = this.productRepository.save(entity);
        return ResponseEntity.ok(saved);
	}

}