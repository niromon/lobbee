import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {SearchComponent} from "./search/search.component";
import {CustomerInfoComponent} from "./customer-info/customer-info.component";

export const ROUTES: Routes = [
    { path: '',      component: SearchComponent },
    { path: 'search/:id', component: SearchComponent },
    { path: 'customer-info', component: CustomerInfoComponent },
    { path: 'supply-detail', loadChildren: './supply-detail#SupplyDetailModule'},
    { path: 'admin', loadChildren: './admin#AdminModule'},
    { path: 'home',  component: HomeComponent },
    { path: '**',    component: NoContentComponent },
];
