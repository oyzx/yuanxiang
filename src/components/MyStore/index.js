import React, { Component } from 'react';
import {Link} from 'react-router';
import Tops from '../../component/Tops';
import store1 from './style/store1.jpg';
import store2 from './style/store2.jpg';
import store3 from './style/store3.jpg';
import store4 from './style/store4.jpg';

class MyStore extends Component {
	render() {
		return (
			<div>
				<div style={{
                  display: 'flex',
                  borderBottom: '2px solid #eee'
                }}>
                <h2>热门商家</h2>
                <Link to="/storelist" style={{
                  marginLeft: 'auto',
                  marginTop: 'auto',
                  color: '#1da5a5'
                }}>更多&gt;&gt;</Link>
                </div>
                <Tops storeImg={store1} storeName="深圳市德诚家政服务" />
                <Tops storeImg={store2} storeName="八点八家政" />
                <Tops storeImg={store3} storeName="深圳市漯家帮家政服务" />
                <Tops storeImg={store4} storeName="深圳亿家家政服务" />
			</div>
		)
	}
}

export default MyStore;