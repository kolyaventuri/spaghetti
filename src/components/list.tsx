import React from 'react';
import {Item} from '../utils/items';

type Props = {
  items: Item[];
  onItemRemove: (index: number) => void;
};

const List: React.FC<Props> = ({items}: Props) => {
  const onItemClick = (index: number): void => {
    console.log(index);
  };

  return (
    <ul>
      {items.map(({id, data}, index) => (
        <li key={id}>
          <p>{data}</p>
          <button
            type="button"
            onClick={(): void => {
              onItemClick(index);
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
