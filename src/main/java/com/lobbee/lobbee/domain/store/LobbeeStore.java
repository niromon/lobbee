package com.lobbee.lobbee.domain.store;

import com.lobbee.lobbee.domain.product.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LobbeeStore {

	@Id
	@GeneratedValue(strategy = AUTO)
	@Column(name = "productid")
	private Long id;

	@Column(name = "name")
	private String name;

	@ManyToMany(fetch = LAZY)
	private Set<Product> products = new HashSet<>();

	/*public static Store fromDto(ProductDto product, CategoryRepository categoryRepository) {
		return new Store(
		        product.getId(), product.getName(),
                product.getCategoryId() == null ? null : categoryRepository.findOne(product.getCategoryId())
		);
	}*/
}