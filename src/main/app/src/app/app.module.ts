import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApplicationRef, NgModule} from '@angular/core';
import {createInputTransfer, createNewHosts, removeNgStyles} from '@angularclass/hmr';
import {PreloadAllModules, RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HomeComponent} from './home';
import {CategoryComponent} from './search';
import {NoContentComponent} from './no-content';
import {XLargeDirective} from './home/x-large';
import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';
import '../styles/styles.scss';
import {HttpClientModule} from "@angular/common/http";
import {Store} from "./store";
import {initState, reducer} from "./reducer";
import {Ng2CompleterModule} from "ng2-completer";
import {SearchComponent} from "./search/search.component";
import {DataService} from "./data/data.service";
import {FilterComponent} from "./search/filter.component";
import {LocationComponent} from "./search/location.component";
import {SharedModule} from "./common/shared.module";
import {AdminModule} from "./admin";

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState,
    DataService,
    { provide: Store, useFactory: (data) => new Store(reducer(data), initState), deps: [DataService] }
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        CategoryComponent,
        FilterComponent,
        LocationComponent,
        HomeComponent,
        SearchComponent,
        NoContentComponent,
        XLargeDirective
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        AdminModule,
        SharedModule,
        BrowserModule,
        MaterializeModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        Ng2CompleterModule,
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        })
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {

    constructor(
        public appRef: ApplicationRef,
        public appState: AppState
    ) {}

    public hmrOnInit(store: StoreType) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        /**
         * Set state
         */
        this.appState._state = store.state;
        /**
         * Set input values
         */
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        /**
         * Save state
         */
        const state = this.appState._state;
        store.state = state;
        /**
         * Recreate root elements
         */
        store.disposeOldHosts = createNewHosts(cmpLocation);
        /**
         * Save input values
         */
        store.restoreInputValues  = createInputTransfer();
        /**
         * Remove styles
         */
        removeNgStyles();
    }

    public hmrAfterDestroy(store: StoreType) {
        /**
         * Display new elements
         */
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
