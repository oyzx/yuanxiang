import React, { Component } from 'react';
import { Carousel } from 'antd';
import Carousel1 from './style/1.jpg';
import Carousel2 from './style/2.jpg';
import Carousel3 from './style/3.jpg';
import Carousel4 from './style/4.jpg';
import listed1 from './style/listed1.jpg';
import listed2 from './style/listed2.jpg';
import listed3 from './style/listed3.jpg';
import listed4 from './style/listed4.jpg';
import './style.css';

class CarouselHr extends Component {
	render() {
		return(
			<div className="Carousel">
				<div className="Carousel-left">
				</div>
				<div style={{width: '700px'}}>
					<Carousel autoplay>
						<div className="Carousel-center"><a href="http://localhost:8080/"><img src={Carousel1} alt="Carousel1" /></a></div>
						<div className="Carousel-center"><a href="http://localhost:8080/"><img src={Carousel2} alt="Carousel2" /></a></div>
						<div className="Carousel-center"><a href="http://localhost:8080/"><img src={Carousel3} alt="Carousel3" /></a></div>
						<div className="Carousel-center"><a href="http://localhost:8080/"><img src={Carousel4} alt="Carousel4" /></a></div>
					</Carousel>
				</div>
				<div className="Carousel-right">
					<img src={listed1} alt="listed1" />
					<img src={listed2} alt="listed2" />
					<img src={listed3} alt="listed3" />
					<img src={listed4} alt="listed4" />
				</div>
			</div>
		)
	}
}

export default CarouselHr;