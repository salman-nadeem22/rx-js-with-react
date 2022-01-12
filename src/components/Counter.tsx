import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const { isLoading, count } = useSelector((state: any) => state);
  const handleDecrement = () => {
    dispatch(actions.decrement(null));
  };

  const handleIncrement = () => {
    dispatch(actions.increment(null));
  };

  return (
    <React.Fragment>
      <strong className='display'>{count || 0}</strong>
      <div className='group'>
        <button type='button' onClick={handleDecrement}>
          {isLoading ? 'Loading...' : 'Decrement'}
        </button>
        <button type='button' onClick={handleIncrement}>
          {isLoading ? 'Loading...' : 'Increment'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Counter;
