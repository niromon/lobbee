import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Category, Product, Query, Result} from "../models";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

const baseUrl = 'http://localhost:8080/';
const baseApiUrl = baseUrl + 'api/';

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

    public findAll(type: string) {
        return this.http.get(baseApiUrl + type)
            .map((data: any) => {
                return data._embedded[type];
            });
    }

    public findAllEager(type: string) {
        return this.http.get(baseApiUrl + type + '?projection=eager')
            .map((data: any) => {
                return data._embedded[type];
            });
    }

    public save(type: string, item) {
        if (_.isUndefined(item.id)) {
            return this.http.post(baseApiUrl + type, item);
        } else {
            return this.http.patch(baseApiUrl + type + '/' + item.id, item);
        }
    }

    public saveProduct(p: Product) {
        if (_.isUndefined(p.id)) {
            return this.http.post(baseUrl + 'product/add', p);
        } else {
            return this.http.patch(baseApiUrl + 'product/' + p.id, p);
        }
    }

    public getTypeProperties(type: string) {
        let ownPropertyNames = [];
        switch (type) {
            case 'product':
                ownPropertyNames = Product.getProperties();
                break;
            case 'category':
                ownPropertyNames = Category.getProperties();
                break;
        }
        return ownPropertyNames;
    }

}
