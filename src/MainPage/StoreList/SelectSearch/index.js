import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.css';

class SelectSearch extends Component {
	render() {
		return (
			<div className="select-search">
				<div className="select-area">
				    <div className="select-name">类别：</div>
				    <div className="area-name">
				    	<div><a style={{color: '#F44336'}}>全部</a></div>
				    	<div><a>保姆</a></div>
					    <div><a>管家管理</a></div>
						<div><a>家教补习</a></div>
						<div><a>宝宝护理</a></div>
						<div><a>孕妇保健</a></div>
						<div><a>月嫂</a></div>
						<div><a>换配钥匙</a></div>
						<div><a>下水道疏通</a></div>
						<div><a>换锁</a></div>
						<div><a>室内清洁</a></div>
						<div><a>室外清洁</a></div>
				    </div>
				</div>
				<div className="select-area">
				    <div className="select-name">服务地区：</div>
				    <div className="area-name">
				    	<div><a style={{color: '#F44336'}}>全地区</a></div>
				    	<div><a>南山区</a></div>
					    <div><a>福田区</a></div>
						<div><a>罗湖区</a></div>
						<div><a>龙华区</a></div>
						<div><a>宝安区</a></div>
						<div><a>龙岗区</a></div>
						<div><a>盐田区</a></div>
				    </div>
				</div>
				<div className="select-condition">
					<div className="select-name">条件：</div>
					<div className="condition-name">
						<div>
							<a>
								<span>南山区</span>
								<Icon type="close" />
							</a>
						</div>
						<div>
							<a>
								<span>室内清洁</span>
								<Icon type="close" />
							</a>
						</div>
					</div>
				</div>
		    </div>
		)
	}
}

export default SelectSearch;