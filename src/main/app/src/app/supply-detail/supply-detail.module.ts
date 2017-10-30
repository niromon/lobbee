import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './supply-detail.routes';
import { SupplyDetailComponent } from './supply-detail.component';
import {RatingComponent} from "../common/rating.component";
import {SharedModule} from "../common/shared.module";

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    SupplyDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SupplyDetailModule {
  public static routes = routes;
}
