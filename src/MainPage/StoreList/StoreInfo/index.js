import React, { Component } from 'react';
import { Pagination, BackTop, Icon } from 'antd';
import StoreDetails from './StoreDetails';
import TopStore from './TopStore';
import store1 from './StoreDetails/style/store1.jpg';
import store2 from './StoreDetails/style/store2.jpg';
import store3 from './StoreDetails/style/store3.jpg';
import store4 from './StoreDetails/style/store4.jpg';
import store5 from './StoreDetails/style/store5.jpg';
import store6 from './StoreDetails/style/store6.jpg';
import store7 from './StoreDetails/style/store7.jpg';
import store8 from './StoreDetails/style/store8.jpg';
import './style.css';

class StoreList extends Component {
	render() {
		return (
			<div style={{margin: '10px 0 40px 0', width:'100%',display: 'flex'}}>
				<div style={{width: '80%'}} className="store-left">
					<div className="store-info">
						<StoreDetails 
							store={store1} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store2} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store3} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store4} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store5} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store6} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store7} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
						<StoreDetails 
							store={store8} 
							intro="专注家政十年 专业护工、保姆、月嫂、育儿嫂、钟点工"
							storeName="深圳市德诚家政服务有限公司"
							storeContact="吴小姐"
							storePhone="4008190469"
							storeArea="宝安 -  沙井  - 广东省深圳市宝安区沙井街道上星村头市场302"
						/>
					</div>
					<div className="pagination">
						<Pagination defaultCurrent={1} total={50} />
					</div>
					<BackTop>
			          <div className="ant-back-top-inner"><Icon type="up" /></div>
			        </BackTop>
				</div>
				<div style={{width: '20%'}} className="store-right">
					<h2>热门商家</h2>
					<TopStore storeImg={store1} storeName="深圳市德诚家政服务" />
					<TopStore storeImg={store2} storeName="八点八家政" />
					<TopStore storeImg={store3} storeName="深圳市漯家帮家政服务" />
					<TopStore storeImg={store4} storeName="深圳亿家家政服务" />
					<TopStore storeImg={store5} storeName="幸运星家政艾灸理疗产后修复" />
					<TopStore storeImg={store6} storeName="一诺到家家政公司" />
					<TopStore storeImg={store7} storeName="金牌月嫂" />
					<TopStore storeImg={store8} storeName="深圳市新力量家政服务有限公司" />
				</div>
			</div>
			
		)
	}
}

export default StoreList;