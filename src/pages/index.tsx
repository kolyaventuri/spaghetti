import React, {useEffect, useState} from 'react';
import Head from 'next/head';

import '../styles/index.scss';
import Form from '../components/form';
import List from '../components/list';
import {Item} from '../utils/items';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [add, setAdd] = useState<any>(null);
  const [remove, setRemove] = useState<any>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const m = require('../utils/items');

    setAdd(() => m.add);
    setItems(() => m.get());
    setRemove(() => m.remove);
  }, []);

  const onSubmit = (item: string): void => {
    const newItems = add(item);
    setItems(newItems);
  };

  return (
    <div>
      <Head>
        <title>Spaghetti</title>
      </Head>
      <section className="section">
        <Form onSubmit={onSubmit} />
        <List items={items} onItemRemove={remove} />
      </section>
    </div>
  );
};

export default Home;
