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
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
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