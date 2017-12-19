import React, { Component } from 'react';
import { Input, Select } from 'antd';
import NewLogo from '../style/newlogo.png';
import './style.css';

const InputGroup = Input.Group;
const Option = Select.Option;

class LogoSearch extends Component {
	render() {
		return (
			<div className="logo-search">
		    	<div className="logo-main">
		        	<img src={NewLogo} alt="NewLogo" />
		        </div>
		    	<div className="search-main">
		        	<div className="search-child">
						<InputGroup compact>
				          	<Select defaultValue="服务">
				            	<Option value="服务">服务</Option>
				            	<Option value="商家">商家</Option>
				          	</Select>
				          	<Input placeholder="请输入信息"  />
				        </InputGroup>
				    </div>
		        </div>
		    </div>
		)
	}
}

export default LogoSearch;