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
import * as _ from "lodash";
import {ActivatedRoute} from "@angular/router";

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'admin',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="row">
            <form #f="ngForm" (ngSubmit)="addItem(f.value)" novalidate class="col s12" >
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
                <admin-list [properties]="properties" [items]="items"></admin-list>
            </div>
        </div>
    `
})
export class CrudComponent<T> implements OnInit {
    private items: T[] = [];
    private type: string;
    private properties: string[];

    constructor(
        private route: ActivatedRoute,
        public data: DataService
    ) {}

    public ngOnInit() {
        this.route
            .paramMap
            .subscribe(params => {
                this.type = params.get('type');
                this.properties = this.data.getTypeProperties(this.type);
                this.refreshItems();
            });
    }

    public addItem(item: T) {
        this.data.save(this.type, item).subscribe(p => this.refreshItems());
    }

    private refreshItems() {
        this.data.findAll(this.type).subscribe(items => this.items = items);
    }
}