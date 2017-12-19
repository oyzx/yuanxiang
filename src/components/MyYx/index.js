import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

class MyYx extends Component {
	render() {
		return (
			<div>
				<h2>原象推荐</h2>
                <div className="yuanxiang-recommend" 
                style={{background: 'linear-gradient(rgba(51, 51, 51, 0.5),rgba(51, 51, 51, 0.5)),url(http://47.95.7.204/yuanxiang1.jpg)'}}>
                  <Link to="http://localhost:8080/">
                    <div className="content">
                      <span>洁净先驱，为您服务。</span>
                    </div>
                  </Link>
                </div>
                <div className="yuanxiang-recommend" 
                style={{background: 'linear-gradient(rgba(51, 51, 51, 0.5),rgba(51, 51, 51, 0.5)),url(http://47.95.7.204/yuanxiang2.jpg)'}}>
                  <Link to="http://localhost:8080/">
                    <div className="content">
                      <span>我们的全心，你们的安心。</span>
                    </div>
                  </Link>
                </div>
                <div className="yuanxiang-recommend"
                style={{background: 'linear-gradient(rgba(51, 51, 51, 0.5),rgba(51, 51, 51, 0.5)),url(http://47.95.7.204/yuanxiang3.jpg)'}}>
                  <Link to="http://localhost:8080/">
                    <div className="content">
                      <span>做诚信大象,搬幸福人家</span>
                    </div>
                  </Link>
                </div>
			</div>
		)
	}
}

export default MyYx;