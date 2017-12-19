import React, { Component } from 'react';
import { Input, Select, Dropdown, Icon } from 'antd';
import { shinei ,muying, weixiu, qingjie } from './index.jsx';
import './style.css';

const InputGroup = Input.Group;
const Option = Select.Option;

class Search extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<div>
				<div className="search">
					<div className="qui-search">
						<div style={{marginLeft: '60px'}}>全部服务</div>
						<div>
							<Dropdown overlay={shinei}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      室内 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
						<div>
							<Dropdown overlay={muying}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      母婴 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
						<div>
							<Dropdown overlay={weixiu}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      维修 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
						<div>
							<Dropdown overlay={qingjie}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      清洁 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
					</div>
					<div style={{ marginLeft: 'auto',marginRight: '74px'}}>
						<InputGroup compact>
				          	<Select defaultValue="服务">
				            	<Option value="服务">服务</Option>
				            	<Option value="商家">商家</Option>
				          	</Select>
				          	<Input style={{ width: '80%' }} placeholder="请输入信息"  />
				        </InputGroup>
				    </div>
				</div>
			</div>
		)
	}
}

export default Search;