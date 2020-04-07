import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('<Input />', () => {
  describe('render', () => {
    describe('word has not been guessed', () => {
      it('renders without error', () => {
        throw new Error('dummy error');
      });
      it('renders an input box', () => {
        throw new Error('dummy error');
      });
      it('renders a submit button', () => {
        throw new Error('dummy error');
      });
    });

    describe('word has been guessed', () => {
      it('renders without error', () => {
        throw new Error('dummy error');
      });
      it('does not render an input box', () => {
        throw new Error('dummy error');
      });
      it('does not render a submit button', () => {
        throw new Error('dummy error');
      });
    });
  });
});
