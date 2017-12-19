import React, { Component } from 'react';
import {Link} from 'react-router';
import Tops from '../../component/Tops';
import people1 from './style/people1.jpg';
import people2 from './style/people2.jpg';
import people3 from './style/people3.jpg';
import people4 from './style/people4.jpg';
import people5 from './style/people5.jpg';
import people6 from './style/people6.jpg';
import people7 from './style/people7.jpg';
import people8 from './style/people8.jpg';
import './style.css';

class TopPeople extends Component {
	render() {
		return (
			<div className="top-people">
    			<div className="tops"><h1>热门服务人员</h1></div>
    			<div className="more-store">
                    <Link to="/peoplelist">
                        更多服务人员
                    </Link>
                </div>
    			<Tops 
    				img1={people1} 
    				img2={people2}
    				img3={people3}
    				img4={people4}
    				name1="李导娟"
    				name2="蔡明姣"
    				name3="陆彩依"
    				name4="李贵云"
    				category="擅长"
    				content1="月嫂、保姆"
    				content2="清洁、照顾新生儿"
    				content3="月嫂、保姆"
    				content4="保姆、清洁"
    			/>
    			<Tops 
    				img1={people5} 
    				img2={people6}
    				img3={people7}
    				img4={people8}
    				name1="饶小清"
    				name2="李吉荣"
    				name3="蒙金兰"
    				name4="谢丽春"
    				category="擅长"
    				content1="清洁、照顾新生儿"
    				content2="月嫂、保姆"
    				content3="保姆、清洁"
    				content4="保姆、清洁"
    			/>
    		</div>
		)
	}
}

export default TopPeople;