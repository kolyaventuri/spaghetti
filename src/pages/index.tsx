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
    setRemove(() => m.remove);
    setItems(() => m.get());
  }, []);

  const onSubmit = (item: string): void => {
    const newItems = add(item);
    setItems(newItems);
  };

  const doRemove = (id: string): void => {
    const items = remove(id);
    setItems(items);
  };

  return (
    <div>
      <Head>
        <title>Spaghetti</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="header">
        <h1>spaghetti.</h1>
        <p>for throwing ideas at a wall.</p>
      </section>
      <section className="main">
        <Form onSubmit={onSubmit} />
        <List items={items} onItemRemove={doRemove} />
      </section>
    </div>
  );
};

export default Home;
