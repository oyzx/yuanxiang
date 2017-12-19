import React, { Component } from 'react';
import {Link} from 'react-router';
import Tops from '../../component/Tops';
import people1 from './style/people1.jpg';
import people2 from './style/people2.jpg';
import people3 from './style/people3.jpg';
import people4 from './style/people4.jpg';

class MyPeople extends Component {
	render() {
		return (
			<div>
				<div style={{
          display: 'flex',
          borderBottom: '2px solid #eee'
        }}>
          <h2>热门服务人员</h2>
          <Link to="http://localhost:8080/" style={{
            marginLeft: 'auto',
            marginTop: 'auto',
            color: '#1da5a5'
          }}>更多&gt;&gt;</Link>
        </div>
        <Tops storeImg={people1} storeName="深圳市德诚家政服务" peopleName='欧阳雨敏' />
        <Tops storeImg={people2} storeName="八点八家政" peopleName='杨思佳'/>
        <Tops storeImg={people3} storeName="深圳市漯家帮家政服务" peopleName='刘文艺' />
        <Tops storeImg={people4} storeName="深圳亿家家政服务" peopleName='胡雨柯' />
			</div>
		)
	}
}

export default MyPeople;