/**
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Store } from './store';
import {ActionValue, State} from "./reducer";
import {DataService} from "../data/data.service";
import {Product} from "../models";

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'product',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="row">
            <form #f="ngForm" (ngSubmit)="addProduct(f.value)" novalidate class="col s12" >
                <div class="row">
                    <div class="input-field col s12">
                        <input ngModel placeholder="Placeholder" name="name" id="name" type="text" class="validate">
                        <label for="name">Nom</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <button type="submit">Ajouter</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col s12">
                <table>
                    <thead>
                        <tr class="blue-text">
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let product of products">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                        </tr>
                    </tbody>
                </table>       
            </div>
        </div>
    `
})
export class ProductComponent implements OnInit {
    private products: Product[] = [];

    constructor(
        public data: DataService
    ) {}

    public ngOnInit() {
        this.refreshProducts();
    }

    public addProduct(product) {
        console.log(product.name);
        this.data.saveProduct(product);
        this.refreshProducts();
    }

    private refreshProducts() {
        this.data.findProducts().subscribe(ps => this.products = ps);
    }
}