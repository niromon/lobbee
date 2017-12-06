import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../data/data.service";
import {Category, Product, ProductEager} from "../models";
import * as _ from 'lodash';


@Component({
    selector: 'product-info',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'product-info.component.html'
})
export class ProductInfoComponent implements OnInit {
    private products: ProductEager[] = [];
    private categories: Category[] = [];

    constructor(
        public data: DataService
    ) {}

    public ngOnInit() {
        this.data.findAll('product').subscribe(ps => this.products = ps);
        this.data.findAll('category').subscribe(cs => this.categories = cs);
    }

    public searchProduct(query) {
        console.log(query);
        this.products = [];
        this.data.searchProducts(query)
            .map(p => {
                const cat = _.find(this.categories, c => p.id === c.id);
                return Object.assign({}, p, { category: cat });
            })
            .subscribe(p => this.products.push(p));
    }

}