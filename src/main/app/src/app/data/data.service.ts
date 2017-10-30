import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Product, Query, Result} from "../models";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    public loadAsyncProducts() : Observable<Product[]> {
        return this.http.get('/assets/mock-data/products.json')
                        .map((res: Product[]) => res);
    }

    public loadAsyncResults(query: Query) : Observable<Result[]> {
        let assets : Observable<Result[]> = this.http.get('/assets/mock-data/results.json').map((res: Result[]) => res);
        return assets.map(rs => {
            rs.forEach(r => (<Result>r).products = query.products.map(p => ({product: p, rate: 3, price: 4})));
            return rs;
        });
    }

}
