import {Component, OnInit} from '@angular/core';
import {ActionValue, State} from "../reducer";
import {Store} from "../store";

@Component({
    selector: 'location',
    styles: [``],
    templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

    public localState = { };

    constructor(
        private store: Store<State, ActionValue>,
    ) {}

    public ngOnInit() {}

}