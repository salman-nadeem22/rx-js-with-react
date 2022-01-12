import { createStore, applyMiddleware } from 'redux';
import { ofType, combineEpics, createEpicMiddleware } from 'redux-observable';
import { from, interval, of } from 'rxjs';
import { concatMap, delay, mergeMap, tap, throttle } from 'rxjs/operators';
import { actions, types } from './actions';
import rootReducer from './mainReducers';
import logger from 'redux-logger';
const { DECREMENT, INCREMENT, INCREMENT_DO } = types;

const { loadingStart, loadingStop, decrementDo, incrementDo } = actions;

const incrementEpic = (action$: any) =>
  action$.pipe( 
    ofType(INCREMENT),
    mergeMap((x) =>
      from([loadingStart, incrementDo, loadingStop]).pipe(
        concatMap((item) => of(item(x)).pipe(delay(100)))
      )
    )
  );

const decrementEpic = (action$: any) =>
  action$.pipe(
    ofType(DECREMENT),
    mergeMap((x) =>
      from([loadingStart, decrementDo, loadingStop]).pipe(
        concatMap((item) => of(item(x)).pipe(delay(100)))
      )
    )
  );

const rootEpic = combineEpics(incrementEpic, decrementEpic);

const epicMiddleware = createEpicMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, logger)
);
epicMiddleware.run(rootEpic);
