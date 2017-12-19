import React, { Component } from 'react';
import {Link} from 'react-router';
import Tops from '../../component/Tops';
import store1 from './style/store1.jpg';
import store2 from './style/store2.jpg';
import store3 from './style/store3.jpg';
import store4 from './style/store4.jpg';
import store5 from './style/store5.jpg';
import store6 from './style/store6.jpg';
import store7 from './style/store7.jpg';
import store8 from './style/store8.jpg';
import './style.css';

class TopService extends Component {
	render() {
    	return (
    		<div>
    			<div className="tops"><h1>热门商家</h1></div>
    			<div className="more-store">
                    <Link to="/storelist">
                        更多商家
                    </Link>
                </div>
    			<Tops 
    				img1={store1} 
    				img2={store2}
    				img3={store3}
    				img4={store4}
    				name1="黄小妹家政"
    				name2="有求必应"
    				name3="非诚家政"
    				name4="德诚家政"
    				category="主营"
    				content1="优质的服务"
    				content2="优质的服务"
    				content3="优质的服务"
    				content4="优质的服务"
    			/>
    			<Tops 
    				img1={store5} 
    				img2={store6}
    				img3={store7}
    				img4={store8}
    				name1="睿天使家政"
    				name2="58家政"
    				name3="家里帮家政"
    				name4="亿家家政"
    				category="主营"
    				content1="优质的服务"
    				content2="优质的服务"
    				content3="优质的服务"
    				content4="优质的服务"
    			/>
    		</div>
		)
	}
}

export default TopService;