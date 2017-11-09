import {Component, OnInit, ViewChild} from '@angular/core';
import {Action, ActionValue, State} from "../reducer";
import {Store} from "../store";
import {NgAutocompleteComponent} from "ng-auto-complete";

import {DataService} from "../data/data.service";
import {CompleterData, CompleterService} from "ng2-completer";
import * as _ from 'lodash';

@Component({
    selector: 'category',
    styles: [],
    templateUrl: './category.component.html',
    providers: [DataService]
})
export class CategoryComponent implements OnInit {

    public localState = { value: undefined, placeholder: "Ajouter un produit"}
    @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

    protected searchStr: string;
    protected productSource: CompleterData;

    constructor(
        private store: Store<State, ActionValue>,
        private data: DataService,
        private completerService: CompleterService
    ) {
        this.data.findAllProductEager()
            .subscribe(o => {
                this.productSource = this.completerService.local(o, 'name', 'name');
            });

    }

    public ngOnInit() {}

    addProduct(): void {
        this.store.sendAction({
            type: Action.ADD_PRODUCT,
            value: this.localState.value
        });
    }

    onSelected($event) {
        if(!_.isEmpty($event)) {
            this.localState.value = $event.originalObject;
        }
    }
}