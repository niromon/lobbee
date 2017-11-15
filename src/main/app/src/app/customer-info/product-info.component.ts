import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../data/data.service";
import {Product} from "../models";


@Component({
    selector: 'product-info',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'product-info.component.html'
})
export class ProductInfoComponent implements OnInit {
    private products: Product[] = [];

    constructor(
        public data: DataService
    ) {}

    public ngOnInit() {
        this.data.findAll('product').subscribe(ps => this.products = ps);
    }

}