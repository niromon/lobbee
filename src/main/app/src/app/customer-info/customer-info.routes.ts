import {CustomerInfoComponent} from "./customer-info.component";
import {ProductInfoComponent} from "./product-info.component";

export const routes = [
    { path: 'customer-info', component: CustomerInfoComponent, children: [
        { path: 'product', component: ProductInfoComponent}
    ]}
];
