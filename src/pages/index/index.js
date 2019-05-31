import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';

import './index.scss';
import AdminModel from '../../models/admin';
const adminModel = new AdminModel();

class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  state = {
    levelOneList: [],
  };

  async componentWillMount() {
    const res = await adminModel.getRepairCategoryList();
    this.setState({
      levelOneList: res.data,
    });
    Taro.setStorageSync('levelOneList', res.data);
  }

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toSecondRepair(item) {
    Taro.setStorageSync('levelOneItem', item);
    Taro.navigateTo({
      url: `/pages/second_repair/second_repair`,
    });
  }

  render() {
    const { levelOneList } = this.state;
    const domList = levelOneList.length
      ? levelOneList.map(item => (
          <View
            className='repair-block'
            key={item.repairId}
            onClick={this.toSecondRepair.bind(this, item)}
          >
            <Text className='block-text'>{item.repairName}</Text>
          </View>
        ))
      : null;

    return <View className='block-wrapper'>{domList}</View>;
  }
}

export default Index;
