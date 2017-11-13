package com.lobbee.lobbee.domain.store;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@RequiredArgsConstructor(staticName = "of")
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class LobbeeStore {

	@Id
	@GeneratedValue(strategy = AUTO)
	@Column(name = "storeid")
	private Long id;

	@Column(name = "name")
    @NonNull
    private String name;

	@Column(name = "rate")
    @NonNull
    private Double rate;

	@OneToMany(fetch = EAGER, mappedBy = "store")
	private Set<LobbeeStoreStock> stocks = new HashSet<>();

	public StoreDto toDto() {
		return new StoreDto(this.getId(), this.getName(), this.getRate());
	}

	public static LobbeeStore fromDto(StoreDto storeDto) {
        return LobbeeStore.of(storeDto.getName(), storeDto.getRate());
	}
}