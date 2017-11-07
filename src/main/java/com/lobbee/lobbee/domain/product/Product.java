package com.lobbee.lobbee.domain.product;

import com.lobbee.lobbee.domain.product.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
import static javax.persistence.GenerationType.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = AUTO)
	@Column(name = "productid")
	private Long id;

	@Column(name = "name")
	private String name;

	@ManyToOne(fetch = EAGER)
	private Category category;

	public static Product fromDto(ProductDto product, CategoryRepository categoryRepository) {
		return new Product(
		        product.getId(), product.getName(),
                product.getCategoryId() == null ? null : categoryRepository.findOne(product.getCategoryId())
		);
	}
}