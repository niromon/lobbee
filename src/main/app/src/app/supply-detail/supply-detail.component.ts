import {
  Component,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Result} from "../models";
import {ActionValue, State} from "../reducer";
import {Store} from "../store";
import * as _ from "lodash";
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'supply-detail',
  templateUrl: `./supply-detail.component.html`,
})
export class SupplyDetailComponent implements OnInit {
    private result: Result;

  
    constructor(
        private route: ActivatedRoute,
        private store: Store<State, ActionValue>
    ) {}

    ngOnInit() {

        const results: Result[] = this.store.state.results;
        this.route
            .paramMap
            .subscribe(params =>
                this.result = _.find( results, r => r.id.toString() == params.get('id'))
            );
    }

}
