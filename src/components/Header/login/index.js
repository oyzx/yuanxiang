import React, { Component } from 'react';
import { Modal, Input } from 'antd';

class Login extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			act: null,
			pwd: null,
		}
	}
	componentDidMount() {
	}
	// 提交
	handleLoginOk = (e) => {
	    this.props.handleOk(this.state.act,this.state.pwd);
	}
	// 关闭弹出框
	handleLoginCancel = (e) => {
	    this.props.handleCancel();
	}
	act = (e) => {
		this.setState({
			act:e.target.value
		})
	}
	pwd = (e) => {
		this.setState({
			pwd:e.target.value
		})
	}
	render() {
		return(
			<Modal
				title="用户登录"
			    visible={this.props.visible}
	            onOk={this.handleLoginOk.bind(this)}
	            onCancel={this.handleLoginCancel.bind(this)}
	        >
				<label>账号</label>
				<Input 
				type="text" 
				placeholder="请输入账号"
				value={this.state.act}
				onChange={this.act.bind(this)}
				/>
				<label>密码</label>
				<Input 
				type="password" 
				placeholder="请输入密码"
				value={this.state.pwd}
				onChange={this.pwd.bind(this)}
				/>
			</Modal>
		)
	}
}

export default Login;