import React, { Component } from 'react';
import { Rate } from 'antd';
import './style.css';

class Tops extends Component {
	render() {
		return (
			<div className="store-right">
				<div className="top-store">
					<div style={{ borderBottom: '1px solid #eee', padding: '0 10px'}}>
						<div>
							<h4 style={{color: 'rgb(29, 165, 122)'}}>深圳市德诚家政服务有限公司</h4>
						</div>
						<div style={{display: 'flex', padding: '5px 0'}}>
							<div className="top-left">
								<img src={this.props.storeImg} alt={this.props.storeImg} /> 
							</div>
							<div className="top-right">
								<Rate disabled defaultValue={5} />
								<p>
									{
										this.props.peopleName
										? this.props.peopleName
										: '深圳'
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Tops;