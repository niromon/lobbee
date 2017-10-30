import { SupplyDetailComponent } from './supply-detail.component';

export const routes = [
  { path: '', children: [
    { path: ':id', component: SupplyDetailComponent }
  ]},
];
