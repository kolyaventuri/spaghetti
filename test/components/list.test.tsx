import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import {stub} from 'sinon';

import noop from '../helpers/noop';
import List from '../../src/components/list';

const render = (props = {}): any => {
  return shallow(<List items={[]} onItemRemove={noop} {...props} />);
};

test('it renders each item as a list item', (t) => {
  const items = [
    {id: 1, data: 'Item1'},
    {id: 2, data: 'Item2'}
  ];
  const tree = render({items});
  t.is(tree.find('ul').length, 1);

  const lis = tree.find('li');
  t.is(lis.length, items.length);

  for (const [i, element] of items.entries()) {
    const p = lis.at(i).find('p');
    t.is(p.text(), element.data);
  }
});

test('when an item is clicked, it calls onItemRemove', (t) => {
  const remove = stub();
  const items = [
    {id: 1, data: 'Item1'},
    {id: 2, data: 'Item2'}
  ];
  const index = 1;

  const tree = render({items, onItemRemove: remove});
  const li = tree.find('li').at(index);
  const button = li.find('button');

  t.is(button.length, 1);
  button.simulate('click');

  t.true(remove.calledWith(items[index].id));
});
