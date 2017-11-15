import {CustomerInfoComponent} from "./customer-info.component";
import {ProductInfoComponent} from "./product-info.component";
import {SharedModule} from "../common/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {routes} from './customer-info.routes';
import { MaterializeModule } from 'ng2-materialize';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        CustomerInfoComponent, ProductInfoComponent
    ],
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        MaterializeModule.forRoot()
    ],
})
export class CustomerInfoModule {
    public static routes = routes;
}
