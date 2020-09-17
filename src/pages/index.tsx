import React from 'react';
import Head from 'next/head';

import '../styles/index.scss';
import Form from 'src/components/form';
import List from 'src/components/list';

const Home: React.FC = () => {
  const onClick = (): void => {
    console.log('TODO');
  };

  return (
    <div>
      <Head>
        <title>Spaghetti</title>
      </Head>
      <section className="section">
        <Form onClick={onClick} />
        <List />
      </section>
    </div>
  );
};

export default Home;
