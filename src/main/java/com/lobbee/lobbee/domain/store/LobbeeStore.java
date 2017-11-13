package com.lobbee.lobbee.domain.store;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LobbeeStore {

	@Id
	@GeneratedValue(strategy = AUTO)
	@Column(name = "storeid")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "rate")
	private Double rate;

	@OneToMany(fetch = EAGER, mappedBy = "store")
	private Set<LobbeeStoreStock> stocks = new HashSet<>();

	public StoreDto toDto() {
		return new StoreDto(this.getId(), this.getName(), this.getRate());
	}
}