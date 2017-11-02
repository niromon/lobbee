import {Component, OnInit,} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActionValue, State} from "../reducer";
import {Store} from "../store";

@Component({
  selector: 'admin',
  templateUrl: `./admin.component.html`,
})
export class AdminComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private store: Store<State, ActionValue>
    ) {}

    ngOnInit() {}

}
