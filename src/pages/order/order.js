import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';

class Order extends Component {
  static defaultProps = {};
  config = {
    navigationBarTitleText: '',
  };

  state = {};

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View>Order</View>;
  }
}

export default Order;
