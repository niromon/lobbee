package com.lobbee.lobbee.domain.store;

import com.lobbee.lobbee.domain.product.Product;
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

    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof LobbeeStoreStock)) return false;
        final LobbeeStoreStock other = (LobbeeStoreStock) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$id = this.getId();
        final Object other$id = other.getId();
        if (this$id == null ? other$id != null : !this$id.equals(other$id)) return false;
        return true;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $id = this.getId();
        result = result * PRIME + ($id == null ? 43 : $id.hashCode());
        return result;
    }

    protected boolean canEqual(Object other) {
        return other instanceof LobbeeStoreStock;
    }

	/*public static Store fromDto(ProductDto product, CategoryRepository categoryRepository) {
		return new Store(
		        product.getId(), product.getName(),
                product.getCategoryId() == null ? null : categoryRepository.findOne(product.getCategoryId())
		);
	}*/
}