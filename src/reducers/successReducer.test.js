import { CORRECT_GUESS } from '../actions/types';
import successReducer from './successReducer';

describe('successReducer', () => {
  it('should return initial state of false when no action passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  it('should return initial state of false when no action passed', () => {
    const newState = successReducer(undefined, { type: CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
