import test from 'ava';

import {get, set, defaults} from '../../src/utils/local-storage';

test('it can set values on localStorage', (t) => {
  const value = 'abc';
  const key = 'def';

  set(key, value);

  const result = window.localStorage.getItem(key);

  t.is(result, value);
});

test('it can get the values from localStorage', (t) => {
  const value = 'abc';
  const key = 'def';

  window.localStorage.setItem(key, value);

  const result = get(key);

  t.is(result, value);
});

test('it can set default values', (t) => {
  const defaultOptions = {
    foo: 'bar',
    bar: 'foo'
  };

  defaults(defaultOptions);

  const result = get('foo');
  const result2 = get('bar');

  t.is(result, defaultOptions.foo);
  t.is(result2, defaultOptions.bar);
});

test('it does not overwrite with defaults if setting exists', (t) => {
  const defaultOptions = {
    foo: 'bar',
    bar: 'foo'
  };
  const previous = 'abc123';
  set('foo', previous);
  defaults(defaultOptions);

  const result = get('foo');
  const result2 = get('bar');

  t.is(result, previous);
  t.is(result2, defaultOptions.bar);
});
