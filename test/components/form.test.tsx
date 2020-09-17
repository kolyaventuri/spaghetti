import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';

import Input from '../../src/components/form';

const render = () => {
  return shallow(<Input />);
};

test('renders a text input', (t) => {
  const tree = render();

  const input = tree.find('input');
  t.is(input.length, 1);
  t.is(input.props()?.type, 'text');
});

test('updates the state when typing', (t) => {
  const tree = render();
  const input = tree.find('input');

  input.simulate('change', {
    target: {
      value: 'Example'
    }
  });

  tree.update();

  t.is(tree.find('input').props()?.value, 'Example');
});
