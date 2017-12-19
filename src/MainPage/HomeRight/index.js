import React, { Component } from 'react';
// import { Link } from 'react-router';
import MyInfo from '../../components/MyInfo';
import MyYx from '../../components/MyYx';
import MyStore from '../../components/MyStore';
import MyPeople from '../../components/MyPeople';
import './style.css';

class HomeRight extends Component {
	render() {
		return (
			<div className="main-home-right">
        <div className="module">
          <MyInfo />
        </div>
        <div className="module">
          <MyYx />
        </div>
        <div className="module">
          <MyStore />
        </div>
        <div className="module">
          <MyPeople />
        </div>
      </div>
		)
	}
}

export default HomeRight;