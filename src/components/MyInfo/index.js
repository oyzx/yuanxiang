import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import './style.css';

class MyInfo extends Component {
	render() {
		return (
			<div className="my-info">
	            <div className="my-info-main">
	              <div>
	                hi, <Link to="http://localhost:8080/">亲！登录</Link>
	              </div>
	              <Button>收藏</Button>
	            </div>
	        </div>
		)
	}
}

export default MyInfo;