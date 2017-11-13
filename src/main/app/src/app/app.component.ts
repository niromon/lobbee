/**
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Store } from './store';
import {ActionValue, State} from "./reducer";

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `

        <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container">

                <a id="logo-container" class="brand-logo" [routerLink]=" ['./'] "
                   routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                    Lobbee
                </a>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <a [routerLink]=" ['./home'] "
                           routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                            Ma liste de courses
                        </a>
                    </li>
                </ul>
                <ul id="nav-mobile" class="side-nav">
                    <li>
                        <a [routerLink]=" ['./home'] "
                           routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                            Ma liste de courses
                        </a>
                    </li>
                </ul>
                <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            </div>
        </nav>

        <main>
            <router-outlet></router-outlet>
        </main>

        <footer>
            <pre class="app-state">this.appState.state = {{ store.state | json }}</pre>
        </footer>
    `
})
export class AppComponent implements OnInit {

    constructor(
        public store: Store<State, ActionValue>
    ) {}

    public ngOnInit() {
        console.log('Initial App State', this.store.state);
    }

}