import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';

import Home from '../../src/pages';

const getComponent = () => {
  return shallow(<Home />);
};

test('renders a head component', (t) => {
  const tree = getComponent();

  t.is(tree.find('Head').length, 1);
});
