import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import {stub} from 'sinon';

import noop from '../helpers/noop';
import Form from '../../src/components/form';

const render = (props = {}): any => {
  return shallow(<Form onSubmit={noop} {...props} />);
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
  const onSubmit = stub();
  const tree = render({onSubmit});
  tree.find('input').simulate('change', {
    target: {
      value: 'Example'
    }
  });
  tree.update();

  const button = tree.find('button');
  button.simulate('click');

  t.true(onSubmit.calledWith('Example'));
});

test('when the button is clicked, if the value is empty, does NOT calls the onClick handler', (t) => {
  const onSubmit = stub();
  const tree = render({onSubmit});
  tree.find('input').simulate('change', {
    target: {
      value: ''
    }
  });
  tree.update();

  const button = tree.find('button');
  button.simulate('click');

  t.false(onSubmit.called);
});
test('if the enter button is pressed, and the textbox is empty, do nothing', (t) => {
  const onSubmit = stub();
  const tree = render({onSubmit});
  const input = tree.find('input');

  input.simulate('keypress', {
    key: 'Enter'
  });

  tree.update();

  t.false(onSubmit.called);
});

test('if the enter button is pressed, and the textbox is NOT empty, calls on the onClick handler', (t) => {
  const onSubmit = stub();
  const tree = render({onSubmit});
  const value = 'example value';

  tree.find('input').simulate('change', {
    target: {
      value
    }
  });
  tree.update();

  tree.find('input').simulate('keypress', {
    key: 'Enter'
  });

  t.true(onSubmit.calledWith(value));
});

test('clears the input value when submitting via enter', (t) => {
  const onSubmit = stub();
  const tree = render({onSubmit});

  tree.find('input').simulate('change', {
    target: {
      value: 'Example'
    }
  });
  tree.update();

  tree.find('input').simulate('keypress', {
    key: 'Enter'
  });

  tree.update();
  t.is(tree.find('input').props()?.value, '');
});

test('clears the input value when submitting via click', (t) => {
  const onSubmit = stub();
  const tree = render({onSubmit});

  tree.find('input').simulate('change', {
    target: {
      value: 'Example'
    }
  });
  tree.update();

  tree.find('button').simulate('click');

  tree.update();
  t.is(tree.find('input').props()?.value, '');
});
