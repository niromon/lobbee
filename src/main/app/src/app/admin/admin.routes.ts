import { SupplyDetailComponent } from './supply-detail.component';
import {AdminComponent} from "./admin.component";
import {ProductComponent} from "./product.component";
import {CrudComponent} from "./crud.component";

export const routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: 'product', component: ProductComponent},
        { path: 'crud/:type', component: CrudComponent}
    ]}
];
