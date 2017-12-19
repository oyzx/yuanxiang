import React, { Component } from 'react';
import { Link } from 'react-router';
import CarouselHr from '../../components/CarouselHr';
import ServiceType from '../../components/ServiceType';
import './style.css';

class HomeLeft extends Component {
	render() {
		return (
			<div className="main-home-left">
        <CarouselHr />
        <div className="service-product">
          <ServiceType />
          <div className="product-type">
            <div className="product-active">
              <Link to="http://localhost:8080/">活动>></Link>
              <div className="product-active-details">
                <div>
                  <img src="http://47.95.7.204/1.jpg" alt="第一个" />
                </div>
                <div></div>
              </div>
            </div>
            <div className="product-active">
              <Link to="http://localhost:8080/">原象推荐>></Link>
              <div className="product-active-details"></div>
            </div>
            <div className="product-active">
              <Link to="http://localhost:8080/">定制优惠>></Link>
              <div className="product-active-details"></div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default HomeLeft;