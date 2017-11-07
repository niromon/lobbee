/**
 * Angular 2 decorators and services
 */
import {
    Component, Input,
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
    selector: 'admin-list',
    encapsulation: ViewEncapsulation.None,
    template: `
        <table>
            <thead>
                <tr class="blue-text">
                    <th *ngFor="let property of properties">{{ property }}</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td *ngFor="let property of properties">{{item[property]}}</td>
                </tr>
            </tbody>
        </table>       
    `
})
export class AdminListComponent<T> implements OnInit {

    @Input() items: T[] = [];
    @Input() properties: string[];

    constructor() {}

    public ngOnInit() {}

}