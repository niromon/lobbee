export class LobbeeStore {
    id: number;
    name: string;
    rate: number
}
export class Product {
    id: number;
    name: string;
    category: Category;

    public static  getProperties() {
        return ['id', 'name', 'category'];
    }
}
export class Filter {
    name: string;
    on: boolean
}
export class Category {
    id: number;
    name: string;
    public static getProperties() {
        return ['id', 'name'];
    }
}

export class ProductResult {
    product: Product;
    rate: number;
    price: number;
}
export class SummaryResult {
    rate: number;
    price: number;
}

export class Result {
    id: number;
    store: LobbeeStore;
    distance: number;
    products: ProductResult[];
    summary: SummaryResult
}

export class Query {
    products: Product[];
}