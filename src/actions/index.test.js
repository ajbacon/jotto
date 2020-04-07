import { correctGuess } from './index';
import { CORRECT_GUESS } from './types';

describe('.correctGuess', () => {
  it('returns an action of type "CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});
