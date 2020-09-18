import React from 'react';
import test from 'ava';
import {mount} from 'enzyme';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';
import delay from 'test/helpers/delay';

const add = stub().callsFake((item) => [item]);
const Home = proxyquire('../../src/pages', {
  '../utils/items': {add}
}).default;

const getComponent = () => {
  return mount(<Home />);
};

test('renders a head component', (t) => {
  const tree = getComponent();

  t.is(tree.find('Head').length, 1);
});

test('renders a Form component', (t) => {
  const tree = getComponent();

  t.is(tree.find('Form').length, 1);
});

test('renders a List component', (t) => {
  const tree = getComponent();

  t.is(tree.find('List').length, 1);
});

test('when onSubmit on the form is called, adds the item to the list', async (t) => {
  const tree = getComponent();
  const form = tree.find('Form');
  await delay();

  const message = 'some item';
  form.props().onSubmit(message);

  t.true(add.calledWith(message));
});

test('when onSubmit is called, updates the state and passes that down to List', async (t) => {
  const tree = getComponent();
  const form = tree.find('Form');
  let list = tree.find('List');
  t.deepEqual(list.props().items, []);

  const message = 'another item';
  form.props().onSubmit(message);
  await delay();
  tree.update();

  list = tree.find('List');
  t.deepEqual(list.props().items, [message]);
});
