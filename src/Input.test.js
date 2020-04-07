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
      let wrapper;
      beforeEach(() => {
        const initialState = { success: false };
        wrapper = setup(initialState);
      });
      it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });
      it('renders an input box', () => {
        const component = findByTestAttr(wrapper, 'component-input-box');
        expect(component.length).toBe(1);
      });
      it('renders a submit button', () => {
        const component = findByTestAttr(wrapper, 'component-submit-btn');
        expect(component.length).toBe(1);
      });
    });

    describe('word has been guessed', () => {
      let wrapper;
      beforeEach(() => {
        const initialState = { success: true };
        wrapper = setup(initialState);
      });
      it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });
      it('does not render an input box', () => {
        const component = findByTestAttr(wrapper, 'component-input-box');
        expect(component.length).toBe(0);
      });
      it('does not render a submit button', () => {
        const component = findByTestAttr(wrapper, 'component-submit-btn');
        expect(component.length).toBe(0);
      });
    });
  });
});
