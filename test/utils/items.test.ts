import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

import {DEFAULT_VALUE, STORAGE_KEY} from '../../src/constants';

const getFn = () => {
  const getStub = stub();
  const setStub = stub();
  const defaults = stub();

  const {get, add, remove} = proxyquire('../../src/utils/items', {
    './local-storage': {
      get: getStub,
      set: setStub,
      defaults
    }
  });

  return {get, add, remove, getStub, setStub, defaults};
};

test('automatically defines defaults', (t) => {
  const {defaults} = getFn();

  t.true(defaults.calledWith(DEFAULT_VALUE));
});

test('#get retrieves the value', (t) => {
  const expected = ['item1', 'item2'];
  const {get, getStub} = getFn();

  getStub.withArgs(STORAGE_KEY).returns(JSON.stringify(expected));

  const result = get();
  t.true(getStub.calledWith(STORAGE_KEY));
  t.deepEqual(result, expected);
});

test('#add adds a value to the existing data', (t) => {
  const initial = ['item1', 'item2'];
  const newItem = 'item3';
  const {add, getStub, setStub} = getFn();

  getStub.returns(JSON.stringify(initial));

  const result = add(newItem);
  const expected = [...initial, newItem];

  t.true(setStub.calledWith(STORAGE_KEY, JSON.stringify(expected)));
  t.deepEqual(result, expected);
});

test('#remove deletes an item', (t) => {
  const initial = ['item1', 'item2', 'item3'];
  const {remove, getStub, setStub} = getFn();

  getStub.returns(JSON.stringify(initial));

  const result = remove(1);
  const expected = ['item1', 'item3'];

  t.true(setStub.calledWith(STORAGE_KEY, JSON.stringify(expected)));
  t.deepEqual(result, expected);
});
