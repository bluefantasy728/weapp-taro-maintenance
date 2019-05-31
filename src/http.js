import Taro from '@tarojs/taro';
import config from './config.js';

export default class Http {
  request(param) {
    const { url, method = 'get' } = param;
    return Taro.request({
      url: config.baseUrl + url,
      method,
    });
  }
}
