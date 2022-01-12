/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { actions, types } from './actions';
// import { DEBUG } from 'constants';

const {
  DECREMENT,
  DECREMENT_DO,
  INCREMENT,
  INCREMENT_DO,
  LOADING_START,
  LOADING_STOP,
} = types;

const reducers = (state: any = { loading: false, count: 0 }, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case DECREMENT:
      return { ...state };
    case DECREMENT_DO:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT:
      return { ...state };
    case INCREMENT_DO:
      return {
        ...state,
        count: state.count + 1,
      };
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducers;
