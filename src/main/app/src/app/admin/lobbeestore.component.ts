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
    selector: 'lobbeestore',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="row">
            <form #f="ngForm" (ngSubmit)="addLobbeeStore(f.value)" novalidate class="col s12" >
                <div class="row">
                        <mz-input-container class="col s12 m6">
                            <input mz-input
                                   [label]="'Name'"
                                   id="name" name="name" ngModel
                                   required
                                   placeholder="Nom du Magasin"
                                   length="150"
                                   type="text">
                        </mz-input-container>
                        <mz-select-container class="col s12 m6">
                            <select mz-select
                                    [label]="'Categorie'"
                                    id="categoryId" name="categoryId" ngModel
                                    required
                                    placeholder="'Choisis ta catégorie'"
                            >
                                <option *ngFor="let cat of categories" [value]="cat.id">{{cat.name}}</option>
                            </select>
                        </mz-select-container>
                </div>
                <div class="row">
                    <button mz-button>Ajouter</button>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col s12">
                <div>
                    <ngx-datatable
                            #mydatatable
                            class="material"
                            [headerHeight]="50"
                            [limit]="5"
                            [columnMode]="'force'"
                            [footerHeight]="50"
                            [rowHeight]="'auto'"
                            [rows]="products">
                        <ngx-datatable-column name="Id"></ngx-datatable-column>
                        <ngx-datatable-column name="Name">
                            <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
                                <span
                                        title="Double click to edit"
                                        (dblclick)="editing[rowIndex + '-name'] = true"
                                        *ngIf="!editing[rowIndex + '-name']">
                                  {{value}}
                                </span>
                                <input
                                        autofocus
                                        (blur)="updateValue($event, 'name', rowIndex)"
                                        *ngIf="editing[rowIndex+ '-name']"
                                        type="text"
                                        [value]="value"
                                />
                            </ng-template>
                        </ngx-datatable-column>
                        <ngx-datatable-column name="Category">
                            <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
                                <span
                                        title="Double click to edit"
                                        (dblclick)="editing[rowIndex + '-category'] = true"
                                        *ngIf="!editing[rowIndex + '-category']">
                                  {{value.name}}
                                </span>
                                <input
                                        autofocus
                                        (blur)="updateValue($event, 'category', rowIndex)"
                                        *ngIf="editing[rowIndex+ '-category']"
                                        type="text"
                                        [value]="value.name"
                                />
                            </ng-template>
                        </ngx-datatable-column>
                    </ngx-datatable>
                </div>
            </div>
        </div>
    `
})
export class LobbeestoreComponent {

}