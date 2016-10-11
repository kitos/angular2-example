import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs";

import {INCREMENT, DECREMENT} from "./component.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux is awesome!';
  counter: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter = store.select<number>('counter');
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }
}
