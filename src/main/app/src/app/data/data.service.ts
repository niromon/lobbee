import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Product, Query, Result} from "../models";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {
    private productUrl: string = 'http://localhost:8080/api/product';

    constructor(private http: HttpClient) {}

    public loadAsyncProducts() : Observable<Product[]> {
        return this.http.get('/assets/mock-data/products.json')
                        .map((res: Product[]) => res);
    }

    public findProducts(): Observable<Product[]> {
        return this.http.get(this.productUrl)
                .map((data: any) => {
                    return data._embedded.product as Product[];
                });
    }

    public saveProduct(product : Product) {
        return this.http.post(this.productUrl, product).subscribe();
    }

    public loadAsyncResults(query: Query) : Observable<Result[]> {
        let assets : Observable<Result[]> = this.http.get('/assets/mock-data/results.json').map((res: Result[]) => res);
        return assets.map(rs => {
            rs.forEach(r => (<Result>r).products = query.products.map(p => ({product: p, rate: 3, price: 4})));
            return rs;
        });
    }

}
