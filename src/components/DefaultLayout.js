import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = props => (
  <div>
    <Menu />
    <Header userName={props.userName} />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default DefaultLayout;