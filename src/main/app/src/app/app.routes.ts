import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {SearchComponent} from "./search/search.component";

export const ROUTES: Routes = [
    { path: '',      component: SearchComponent },
    { path: 'search/:id', component: SearchComponent },
    { path: 'supply-detail', loadChildren: './supply-detail#SupplyDetailModule'},
    { path: 'home',  component: HomeComponent },
    { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
    { path: '**',    component: NoContentComponent },
];
