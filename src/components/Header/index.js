import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import { myMessage, myAccount, myJumbo, myReserve, mySeller, myService } from './index.jsx';
import Login from './login';
import './style.css';

class Header extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			myAccount: myAccount,
			myMessage: myMessage,
			myJumbo: myJumbo,
			myReserve: myReserve,
			mySeller: mySeller,
			myService: myService,
			landingStatus: true,
			act: null,
			pwd: null,
			visible: false,
		}
	}
	// 触发弹出框，显示
	showModal = () => {
	    this.setState({
	      visible: true,
	    });
	}
	// 弹出框确认键，并关闭弹出框
	handleOk = (act,pwd) => {
	    this.setState({
	      visible: false,
	    });
	    this.setState({
	    	landingStatus: true,
	    	act: act,
	    	pwd: pwd
	    })
	    sessionStorage.setItem("account", act);
	    sessionStorage.setItem("password", pwd);
	}
	// 弹出框的关闭键
	handleCancel = () => {
	    this.setState({
	      visible: false,
	    });
	}
	componentWillMount() {
		this.setState({
			landingStatus: false,
		})
	}
	componentDidMount() {
	}
	render() {
		return (
			<div className="mains">
				<div className="main flex-contain">
					<div className="main-left flex-contain">
						<div>
							{
								this.state.landingStatus
								? 	<Dropdown overlay={this.state.myAccount}>
									    <a className="ant-dropdown-link" href="http://localhost:8080">
									      {this.state.act} <Icon type="down" />
									    </a>
									</Dropdown>
								:  	<a onClick={this.showModal.bind(this)}>请登陆</a>
							}
				        	<Login 
				        	visible={this.state.visible} 
				        	handleOk={this.handleOk.bind(this)}
				        	handleCancel={this.handleCancel.bind(this)}
				        	/>
						</div>
						<div>
							<Dropdown overlay={this.state.myMessage}>
								<a className="ant-dropdown-link" href="http://localhost:8080">
							      消息 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
					</div>
					<div className="main-right flex-contain">
						<div>
							<Dropdown overlay={this.state.myJumbo}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      我的原象 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
						<div>
							<Dropdown overlay={this.state.myReserve}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      我的收藏栏 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
						<div>
							<a className="ant-dropdown-link" href="http://localhost:8080">
							  服务分类
							</a>
						</div>
						<div>
							<Dropdown overlay={this.state.mySeller}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      卖家中心 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
						<div>
							<Dropdown overlay={this.state.myService}>
							    <a className="ant-dropdown-link" href="http://localhost:8080">
							      联系客服 <Icon type="down" />
							    </a>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;