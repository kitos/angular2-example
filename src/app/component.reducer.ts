import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export const componentReducer: ActionReducer<number> =  (store: number = 0  , action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return store + 1;
    case DECREMENT:
      return store - 1;
    default:
      return store;
  }
};
