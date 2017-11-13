import {SupplyDetailComponent} from './supply-detail.component';
import {AdminComponent} from "./admin.component";
import {ProductComponent} from "./product.component";
import {CrudComponent} from "./crud.component";
import {RowGroupingComponent} from "./rowgrouping.component";
import {UploadComponent} from "./upload.component";
import {FormUploadComponent} from "./form-upload.component";

export const routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: 'upload', component: FormUploadComponent},
        { path: 'product', component: ProductComponent},
        { path: 'test', component: RowGroupingComponent},
        { path: 'crud/:type', component: CrudComponent}
    ]}
];
