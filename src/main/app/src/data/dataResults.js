import {stores} from "./stores";
import * as _ from "lodash";
import {products} from "./products";

function findStore(id) {
    return _.find(stores, {id: id});
}
function findProduct(id) {
    return _.find(products, {id: id});
}

export const dataResults = [
    {   store: findStore(1),
        distance: 450,
        products: [{product : findProduct(1), rate : 3, price : 3}, {product : findProduct(2), rate : 4, price : 7}],
        summary: {rate : 3.5, price : 5}
    },
    {
        store: findStore(2),
        distance: 600,
        products: [{product : findProduct(1), rate : 2, price : 4}, {product : findProduct(2), rate : 5, price : 6}],
        summary: {rate : 3.5, price : 5}
    }
];