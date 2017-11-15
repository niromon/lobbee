import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Store } from './store';
import {ActionValue, State} from "./reducer";
import {DataService} from "../data/data.service";
import {Category, Product} from "../models";
import * as _ from 'lodash';


/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'customer-info',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'customer-info.component.html'
})
export class CustomerInfoComponent implements OnInit {
    private products: Product[] = [];

    constructor(
        public data: DataService
    ) {}

    public ngOnInit() {
        this.data.findAll('product').subscribe(ps => this.products = ps);
    }

}