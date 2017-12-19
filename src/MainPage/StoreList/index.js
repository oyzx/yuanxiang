import React, { Component } from 'react';
import Header from '../../components/Header';
import LogoSearch from '../../component/LogoSearch';
import SelectSearch from './SelectSearch';
import StoreInfo from './StoreInfo';
import Footer from '../../components/Footer';
import './style.css';

class StoreList extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="main">
		        	<div className="main-store-list">
		        		<LogoSearch />
			        	<SelectSearch />
			        	<StoreInfo />
		        	</div>
		        </div>
		        <Footer />
			</div>
		)
	}
}

export default StoreList;