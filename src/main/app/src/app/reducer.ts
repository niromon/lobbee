import {WatchService} from "./watch";
import {DataService} from "./data/data.service";
import {Observable} from "rxjs";
import {Reducer, Store} from "./store";
import {Category, Product, Result} from "./models";
import * as _ from 'lodash';
// import Map = require("core-js/es6/map");

export type State = { products: Product[], filters: {[key: string]: boolean}, results: Result[]};

export enum Action {
    ADD_PRODUCT,
    TOOGLE_FILTER,
    SHOW_RESULTS
}

export type ActionValue = { type: Action, value: any };

export const initState: State = {products: [], filters: {}, results: []};

export function reducer(data: DataService): Reducer<State, ActionValue> {
    return (store: Store<State, ActionValue>, state: State, action: ActionValue): State|Observable<State> => {
        switch (action.type) {
            case Action.ADD_PRODUCT:
                if(_.find(state.products, action.value))
                    return state;
                else
                    return {
                        ...state,
                        products: [...state.products, action.value]
                    };
            case Action.TOOGLE_FILTER:
                state.filters[action.value.filter] = action.value.value;
                return { ...state, filters: state.filters };
            case Action.SHOW_RESULTS:
                return data.loadAsyncResults(action.value).map(
                    rs => ({...state, results: rs})
                );
            default:
                return state;
        }
    }
}