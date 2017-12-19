import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class StoreButton extends Component {
	render() {
		return (
    		<div className="store-button">
    			<Button type="primary" className="store-collect"><Icon type="plus-circle-o" />{this.props.firstButton}</Button>
    			<Button type="danger" className="store-detail"><Icon type="pushpin" />{this.props.lastButton}</Button>
    		</div>
		)
	}
}

export default StoreButton;