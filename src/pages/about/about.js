import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';

class About extends Component {
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
    return <View>About</View>;
  }
}

export default About;
