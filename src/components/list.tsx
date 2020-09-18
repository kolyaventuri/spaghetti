import React from 'react';
import {Item} from '../utils/items';

type Props = {
  items: Item[];
};

const List: React.FC<Props> = ({items}: Props) => (
  <div>{JSON.stringify(items)}</div>
);

export default List;
