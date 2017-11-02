import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {routes} from './admin.routes';
import {SharedModule} from "../common/shared.module";
import {AdminComponent} from "./admin.component";
import {ProductComponent} from "./product.component";


@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    AdminComponent, ProductComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {
  public static routes = routes;
}
