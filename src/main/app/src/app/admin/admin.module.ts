import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterializeModule } from 'ng2-materialize';
import { ReactiveFormsModule } from '@angular/forms';

import {routes} from './admin.routes';
import {SharedModule} from "../common/shared.module";
import {AdminComponent} from "./admin.component";
import {ProductComponent} from "./product.component";
import {CrudComponent} from "./crud.component";
import {AdminListComponent} from "./admin-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RowGroupingComponent} from "./rowgrouping.component";


@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    AdminComponent, ProductComponent, CrudComponent, AdminListComponent, RowGroupingComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterializeModule.forRoot()
  ],
})
export class AdminModule {
  public static routes = routes;
}
