import React, { Component } from 'react';
import Header from './components/Header';
import CarouselHr from './components/CarouselHr';
import Search from './components/Search';
import TopService from './components/TopService';
import TopPeople from './components/TopPeople';
import Footer from './components/Footer';
import { BackTop, Icon } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
        	<CarouselHr />
        	<Search />
        	<TopService />
        	<TopPeople />
        </div>
        <Footer />
        <BackTop>
          <div className="ant-back-top-inner"><Icon type="up" /></div>
        </BackTop>
      </div>
    );
  }
}

export default App;