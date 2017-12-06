export class LobbeeStore {
    id: number;
    name: string;
    rate: number;

    public static  getProperties() {
        return ['id', 'name', 'rate'];
    }
}
export class Product {
    id: number;
    name: string;
}

export class ProductEager extends Product {
    category: Category;

    public static  getProperties() {
        return ['id', 'name', 'category'];
    }
}
export class ProductLazy extends Product {
    categoryId: number;
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

export class SupplyQuery {
    productIds: number[];
}

export class ProductQuery {
    name: string;
    categoryId: number;
}