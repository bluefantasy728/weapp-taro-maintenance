import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import './second_repair.scss';
import AdminModel from '../../models/admin';
const adminModel = new AdminModel();

class SecondRepair extends Component {
  static defaultProps = {};
  config = {
    navigationBarTitleText: '选择条目',
  };

  state = {
    levelOneItem: Taro.getStorageSync('levelOneItem'),
    levelOneList: Taro.getStorageSync('levelOneList'),
    levelTwoList: [],
  };

  async getRepairCategoryList(item) {
    const res = await adminModel.getRepairCategoryList(item.repairId);
    this.setState({
      levelTwoList: res.data,
    });
  }

  selectLevel1(levelOneItem) {
    Taro.setStorageSync('levelOneItem', levelOneItem);
    this.setState(
      {
        levelOneItem,
      },
      () => {
        this.getRepairCategoryList(levelOneItem);
      },
    );
  }

  toBookDetail(levelTwoItem) {
    Taro.setStorageSync('levelTwoItem', levelTwoItem);
    Taro.navigateTo({
      url: '/pages/book_detail/book_detail',
    });
  }

  componentWillMount() {
    this.getRepairCategoryList(this.state.levelOneItem);
  }

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { levelOneList, levelTwoList, levelOneItem } = this.state;
    return (
      <View>
        <View className='top-bar'>
          {levelOneList.map(item => (
            <View
              className={[
                'top-bar-item',
                item.repairId === levelOneItem.repairId ? 'active' : null,
              ].join(' ')}
              key={item.repairId}
              onClick={this.selectLevel1.bind(this, item)}
            >
              {item.repairName}
            </View>
          ))}
        </View>
        <View className='repair-item-container'>
          {levelTwoList.map(item => (
            <View
              className='repair-item'
              key={item.repairId}
              onClick={this.toBookDetail.bind(this, item)}
            >
              {item.repairName}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default SecondRepair;
