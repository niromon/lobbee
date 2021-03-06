import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Category, LobbeeStore, Product, SupplyQuery, Result, ProductLazy, ProductEager} from "../models";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

const baseUrl = API_URL;
const baseApiUrl = baseUrl + 'api/';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    public loadAsyncProducts() : Observable<ProductEager[]> {
        return this.http.get('/assets/mock-data/products.json')
                        .map((res: ProductEager[]) => res);
    }

    public loadAsyncResults(query: SupplyQuery) : Observable<Result[]> {
        let res : Observable<Result[]> = this.http.post(baseUrl + 'search/supply', query)
            .map((res: Result[]) => res);
        return res;
    }

    public searchProducts(query: SupplyQuery) : Observable<ProductLazy> {
        let res : Observable<ProductLazy> = this.http.post(baseUrl + 'search/product', query)
            .flatMap((res: ProductLazy[]) => res);
        return res;
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

    public findAllProductEager() : Observable<ProductEager[]> {
        return this.http.get(baseApiUrl + 'product?projection=eager')
            .map((data: any) => {
                return data._embedded['product'];
            });
    }

    public save(type: string, item) {
        if (_.isUndefined(item.id)) {
            return this.http.post(baseApiUrl + type, item);
        } else {
            return this.http.patch(baseApiUrl + type + '/' + item.id, item);
        }
    }

    public saveProduct(p: ProductEager) {
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
                ownPropertyNames = ProductEager.getProperties();
                break;
            case 'lobbeestore':
                ownPropertyNames = LobbeeStore.getProperties();
                break;
            case 'category':
                ownPropertyNames = Category.getProperties();
                break;
        }
        return ownPropertyNames;
    }

}
