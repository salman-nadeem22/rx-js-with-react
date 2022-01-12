// ACTION TYPES
export const types = {
  DECREMENT: 'DECREMENT',
  DECREMENT_DO: 'DECREMENT_DO',
  INCREMENT: 'INCREMENT',
  INCREMENT_DO: 'INCREMENT_DO',
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP',
};

// ACTION CREATORS
export const actions = {
  decrement: (payload?: any) => ({
    payload,
    type: types.DECREMENT,
  }),
  decrementDo: (payload?: any) => ({
    payload,
    type: types.DECREMENT_DO,
  }),
  increment: (payload?: any) => ({
    payload,
    type: types.INCREMENT,
  }),
  incrementDo: (payload?: any) => ({
    payload,
    type: types.INCREMENT_DO,
  }),
  loadingStart: (payload?: any) => ({
    payload,
    type: types.LOADING_START,
  }),
  loadingStop: (payload?: any) => ({
    payload,
    type: types.LOADING_STOP,
  }),
};
