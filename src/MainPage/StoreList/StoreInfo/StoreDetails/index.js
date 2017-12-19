import React, { Component } from 'react';
import StoreButton from '../../../../component/StoreButton';
import './style.css';

class StoreDetails extends Component {
	render() {
		return (
			<div className="store-details">
				<div className="store-img">
					<img src={this.props.store} alt={this.props.store} />
				</div>
				<div className="store-text">
					<h2>{this.props.intro}</h2>
					<h3>{this.props.storeName}</h3>
					<h4>联系人：{this.props.storeContact}</h4>
					<h4>联系电话：{this.props.storePhone}</h4>
					<h4>地址：{this.props.storeArea}</h4>
					<StoreButton firstButton="收藏" lastButton="详情" />
				</div>
			</div>
		)
	}
}

export default StoreDetails;