import React,{ Component } from 'react';
import { Router,Route } from 'react-router';

import Index from '../MainPage';
import StoreList from '../MainPage/StoreList';
import PeopleList from '../MainPage/PeopleList';
import User from '../MainPage/User';
import Search from '../MainPage/Search';
import Detail from '../MainPage/Detail';
import NotFound from '../MainPage/NotFound';


export default class RouteMap extends Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path='/' component={Index} />
				<Route path='/storelist' component={StoreList} />
				<Route path='/peoplelist' component={PeopleList} />
				<Route path='/user' component={User} />
				<Route path='/search/:category(/:keyword)' component={Search} />
				<Route path='/detail/:id' component={Detail} />
				<Route path='*' component={NotFound} />
			</Router>
		)
	}
}