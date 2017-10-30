import {Component, OnInit} from '@angular/core';
import {Action, ActionValue, State} from "../reducer";
import {Store} from "../store";

@Component({
    selector: 'filter',
    styles: [``],
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

    constructor(
        private store: Store<State, ActionValue>,
    ) {}

    public ngOnInit() {}

    public toogle(name: string, value: string): void {
        this.store.sendAction({
            type: Action.TOOGLE_FILTER,
            value: {filter: name, value: value}
        });
    }

}