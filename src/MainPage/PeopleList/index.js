import React, { Component } from 'react';
import Header from '../../components/Header';
import LogoSearch from '../../component/LogoSearch';
import Footer from '../../components/Footer';
import './style.css';

class PeopleList extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="main">
					<div className="main-people-list">
						<LogoSearch />
					</div>
		        </div>
		        <Footer />
			</div>
		)
	}
}

export default PeopleList;