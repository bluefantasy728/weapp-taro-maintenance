import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { PropTypes } from 'nervjs';
import { AtInput } from 'taro-ui';

class Child extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  onClickFn() {
    const res = 'My name is hehe';
    this.props.onHandle(res);
  }
  handleChange(value) {
    const { onHandle } = this.props;
    this.setState({
      value,
    });

    onHandle(value);

    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }

  render() {
    const { firstName, onHandle } = this.props;
    return (
      <View>
        <Text onClick={this.onClickFn}>{firstName}!!!</Text>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='标准五个字'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
      </View>
    );
  }
}

Child.protoTypes = {
  firstName: PropTypes.string,
};
