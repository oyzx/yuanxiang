import React, { Component } from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import Header from '../components/Header';
import LogoSearch from '../component/LogoSearch';
// import TopService from '../components/TopService';
// import TopPeople from '../components/TopPeople';
import Footer from '../components/Footer';
import { BackTop, Icon } from 'antd';


import './style.css';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <LogoSearch />
          <div className="main-home">
            <HomeLeft />
            <HomeRight />
          </div>
        </div>
        <Footer />
        <BackTop>
          <div className="ant-back-top-inner"><Icon type="up" /></div>
        </BackTop>
      </div>
    );
  }
}

export default Index;