import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import BlaglIcon from '@kolyaventuri/blagl-icon';

import '../styles/index.scss';
import Form from '../components/form';
import List from '../components/list';
import {Item} from '../utils/items';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [add, setAdd] = useState<any>(null);
  const [remove, setRemove] = useState<any>(null);
  const [isMobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const m = require('../utils/items');

    setAdd(() => m.add);
    setRemove(() => m.remove);
    setItems(() => m.get());

    setMobile(window.innerWidth < 768);
  }, []);

  const onSubmit = (item: string): void => {
    const newItems = add(item);
    setItems(newItems);
  };

  const doRemove = (id: string): void => {
    const items = remove(id);
    setItems(items);
  };

  const openBlagl = (): void => {
    window.open('https://www.blagl.xyz/?ref=spaghetti', '_blank');
  };

  const type = isMobile ? 'simple' : 'expanding';
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
      <section className="footer">
        {isMobile !== null && (
          <BlaglIcon size={48} type={type} onClick={openBlagl} />
        )}
      </section>
    </div>
  );
};

export default Home;
