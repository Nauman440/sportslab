import React from 'react';
import Layout from '../components/common/layout';
import Home from '../components/home/main';
import Bar from '../components/home/barSection';
import Desc from '../components/home/descrption';
import Ingrediants from '../components/home/ingrediants';
import Contact from '../components/home/contact';
import CopyRight from '../components/home/copyright';

const IndexPage = () => (
  <Layout>
    <Home />
    <Bar />
    <Desc />
    <Ingrediants />
    <Contact />
    <CopyRight />
  </Layout>
);

export default IndexPage;
