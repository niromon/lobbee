package com.lobbee.lobbee.domain.product;

import com.google.common.base.Strings;
import com.lobbee.lobbee.domain.product.repository.CategoryRepository;
import com.lobbee.lobbee.domain.search.ProductResult;
import lombok.*;

import javax.persistence.*;

import java.util.List;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Data
@RequiredArgsConstructor(staticName = "of")
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Product {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "productid")
    private Long id;

    @Column(name = "name")
    @NonNull
    private String name;

    @Column(name = "rate")
    @NonNull
    private Double rate;

    @ManyToOne(fetch = EAGER)
    @NonNull
    private Category category;

    public static Product fromDto(ProductDto product, CategoryRepository categoryRepository) {
        return Product.of(
            product.getName(),
            product.getRate(),
            product.getCategoryId() == null ? null : categoryRepository.findOne(product.getCategoryId())
        );
    }

    public static ProductDto toDto(Product p) {
        return ProductDto.builder()
                .id(p.getId())
                .name(p.getName())
                .rate(p.getRate())
                .categoryId(p.getCategory().getId())
                .build();
    }

    public static Product fromJsonDto(ProductJsonDto product, CategoryRepository categoryRepository) {
        return Product.of(
            product.getName(),
            product.getRate(),
            Strings.isNullOrEmpty(product.getCategory()) ? null : categoryRepository.findByName(product.getCategory())
        );
    }
}
