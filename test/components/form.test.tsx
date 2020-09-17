import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import {stub} from 'sinon';

import noop from '../helpers/noop';
import Input from '../../src/components/form';

const render = (props = {}): any => {
  return shallow(<Input onClick={noop} {...props} />);
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

test('renders an add button', (t) => {
  const tree = render();

  const button = tree.find('button');
  t.is(button.length, 1);
});

test('when the button is clicked, calls the onClick handler', (t) => {
  const onClick = stub();
  const tree = render({onClick});
  tree.find('input').simulate('change', {
    target: {
      value: 'Example'
    }
  });
  tree.update();

  const button = tree.find('button');
  button.simulate('click');

  t.true(onClick.calledWith('Example'));
});
