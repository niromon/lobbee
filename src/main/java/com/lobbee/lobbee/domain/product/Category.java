package com.lobbee.lobbee.domain.product;

import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.*;

@Entity
@Data
public class Category {

	@Id
	@GeneratedValue(strategy = AUTO)
	@Column(name = "categoryid")
	private long id;

	@Column(name = "name")
	private String name;

}