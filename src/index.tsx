import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Root = () => {
  return (
    <Provider store={store}>
      <h3>React + Context + useReducer + RxJS Observables</h3>
      <p>
        The purpose of this Counter app is to learn RxJS by using it alone with
        React's new hooks features.
      </p>
      <p>
        NOTE: The RxJS' Observable gets fired on the browser's console (F12) but
        not in the component itself! L@@k at{' '}
        <u>./src/context/Counter/middleware.js</u>
      </p>
      <Counter />
    </Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
