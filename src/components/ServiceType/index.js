import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

class ServiceType extends Component {
	render() {
		return (
			<div className="service-type">
				<div className="services all"><Link to="/peoplelist">全部</Link></div>
				<div className="services daily-cleaning"><Link to="/peoplelist">日常保洁</Link></div>
				<div className="services special-cleaning"><Link to="/peoplelist">专项保洁</Link></div>
				<div className="services appliances-cleaning"><Link to="/peoplelist">家电清洗</Link></div>
				<div className="services furniture-maintenance"><Link to="/peoplelist">家居保养</Link></div>
				<div className="services family-maintenance"><Link to="/peoplelist">家庭维修</Link></div>
				<div className="services nanny"><Link to="/peoplelist">保姆</Link></div>
				<div className="services yuesao"><Link to="/peoplelist">月嫂</Link></div>
				<div className="services parenting"><Link to="/peoplelist">育儿嫂</Link></div>
				<div className="services unlock-lock"><Link to="/peoplelist">开锁换锁</Link></div>
			</div>
		)
	}
}

export default ServiceType;