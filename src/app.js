import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';

import configStore from './store';

import './app.scss';

import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  config = {
    pages: [
      'pages/book_detail/book_detail',
      'pages/index/index',
      'pages/second_repair/second_repair',

      'pages/order/order',
      'pages/info/info',
      'pages/about/about',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    // tabBar: {
    //   color: '#ccc',
    //   selectedColor: '#1660e8',
    //   list: [
    //     {
    //       pagePath: 'pages/index/index',
    //       text: '预约',
    //     },
    //     {
    //       pagePath: 'pages/order/order',
    //       text: '订单',
    //     },
    //     {
    //       pagePath: 'pages/info/info',
    //       text: '我的',
    //     },
    //     {
    //       pagePath: 'pages/about/about',
    //       text: '关于',
    //     },
    //   ],
    // },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
