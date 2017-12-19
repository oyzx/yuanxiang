import React from 'react';
import { Menu } from 'antd';
const Item = Menu.Item;

// 已登陆的信息
export const myAccount = (
	<Menu>
	    <Item>
	      <a target="blank" href="http://localhost:8080">账号管理</a>
	    </Item>
	    <Item>
	      <a target="blank" href="http://localhost:8080">退出</a>
	    </Item>
  	</Menu>
)
// 消息
export const myMessage = (
	<Menu>
	    <Item>
	      <a target="blank" href="http://localhost:8080">查看更多信息</a>
	    </Item>
  	</Menu>
)
// 我的原象
export const myJumbo = (
	<Menu>
	    <Item>
	      <a target="blank" href="http://localhost:8080">已预约服务</a>
	    </Item>
	    <Item>
	      <a target="blank" href="http://localhost:8080">历史服务</a>
	    </Item>
  	</Menu>
)
// 我的收藏栏
export const myReserve = (
	<Menu>
	    <Item>
	      <a target="blank" href="http://localhost:8080">收藏服务</a>
	    </Item>
	    <Item>
	      <a target="blank" href="http://localhost:8080">收藏商家</a>
	    </Item>
  	</Menu>
)
// 卖家中心
export const mySeller = (
	<Menu>
		<Item>
	      <a target="blank" href="http://localhost:8080">卖家登陆</a>
	    </Item>
	    <Item>
	      <a target="blank" href="http://localhost:8080">如何成为商家</a>
	    </Item>
	    <Item>
	      <a target="blank" href="http://localhost:8080">服务中心</a>
	    </Item>
	</Menu>
)
// 联系客服
export const myService = (
	<Menu>
		<Item>
	      <a target="blank" href="http://localhost:8080">消费者客服</a>
	    </Item>
	    <Item>
	      <a target="blank" href="http://localhost:8080">商家客服</a>
	    </Item>
	</Menu>
)
