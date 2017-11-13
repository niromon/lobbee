package com.lobbee.lobbee.domain.store;

import com.lobbee.lobbee.domain.product.Product;
import com.lobbee.lobbee.domain.product.repository.ProductRepository;
import com.lobbee.lobbee.domain.store.repository.LobbeeStoreRepository;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@RequiredArgsConstructor(staticName = "of")
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class LobbeeStoreStock {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @NonNull
    private LobbeeStore store;

    @OneToOne(fetch = FetchType.EAGER)
    @NonNull
    private Product product;

    @Column(name = "price")
    @NonNull
    private Double price;

	public static LobbeeStoreStock fromDto(LobbeeStoreStockDto sp,
                                        LobbeeStoreRepository storeRepository,
                                        ProductRepository productRepository) {
		return new LobbeeStoreStock(
            storeRepository.findOne(sp.getStoreId()),
            productRepository.findOne(sp.getProductId()),
            sp.getPrice()
		);
	}

	public static LobbeeStoreStock fromJsonDto(LobbeeStoreStockJsonDto sp,
                                        LobbeeStoreRepository storeRepository,
                                        ProductRepository productRepository) {
		return new LobbeeStoreStock(
            storeRepository.findByName(sp.getStoreName()),
            productRepository.findByName(sp.getProductName()),
            sp.getPrice()
		);
	}
}