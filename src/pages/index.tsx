import React from 'react';
import Head from 'next/head';

import '../styles/index.scss';
import Input from 'src/components/input';
import List from 'src/components/list';

class Home extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Head>
          <title>Spaghetti</title>
        </Head>
        <section className="section">
          <Input />
          <List />
        </section>
      </div>
    );
  }
}

export default Home;
