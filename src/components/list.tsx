import React from 'react';
import {Item} from '../utils/items';

type Props = {
  items: Item[];
  onItemRemove: (index: string) => void;
};

const List: React.FC<Props> = ({items, onItemRemove}: Props) => {
  const onItemClick = (id: string): void => {
    onItemRemove(id);
  };

  return (
    <ul className="list">
      {items.map(({id, data}) => (
        <li key={id} className="item">
          <p>{data}</p>
          <button
            type="button"
            onClick={(): void => {
              onItemClick(id);
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
