import Taro, { Component } from '@tarojs/taro';
import { AtInput, AtImagePicker } from 'taro-ui';
import { View, Button, Text, Picker } from '@tarojs/components';
import './book_detail.scss';

class BookDetail extends Component {
  static defaultProps = {};
  config = {
    navigationBarTitleText: '',
  };

  state = {
    addressOptions: ['北京', '上海', '杭州', '南京'],
    repairName: '',
    form: {
      maintainProId: '',
      maintainExplain: '',
      linkman: '',
      phone: '',
      address: '上海',
      detailAddress: '',
      custRemark: '',
      userCouponId: '',
      files: [
        {
          url:
            'http://b.hiphotos.baidu.com/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg',
        },
      ],
    },
  };

  getRepairName() {
    const levelOneName = Taro.getStorageSync('levelOneItem').repairName;
    const levelTwoName = Taro.getStorageSync('levelTwoItem').repairName;
    this.setState({
      repairName: levelOneName + ' | ' + levelTwoName,
    });
  }

  onChangeImg(files) {
    console.log(arguments);
    this.setState({
      form: {
        files,
      },
    });
  }
  onImageClick(index, file) {
    console.log(index, file);
  }

  onChangeAddress(ev) {
    const index = ev.detail.value;
    this.setState({
      form: {
        ...this.state.form,
        ...{
          address: this.state.addressOptions[index],
        },
      },
    });
  }

  onChangInput() {
    const type = arguments[0];
    const val = arguments[1];
    this.setState({
      form: {
        ...this.state.form,
        ...{
          [type]: val,
        },
      },
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return val;
  }

  componentWillMount() {
    this.getRepairName();
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.state);
    console.log(nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <View className='page-block'>
          <AtInput
            name='value'
            title='维修项目'
            disabled
            type='text'
            value={this.state.repairName}
          />
          <AtInput
            className='wrap-input'
            placeholderStyle='color:#ddd'
            name='value'
            title='维修说明'
            type='text'
            placeholder='输入维修说明'
            value={this.state.form.maintainExplain}
            onChange={this.onChangInput.bind(this, 'maintainExplain')}
          />
          <AtImagePicker
            multiple={false}
            files={this.state.form.files}
            onChange={this.onChangeImg.bind(this)}
            onImageClick={this.onImageClick.bind(this)}
          />
        </View>
        <View className='page-block'>
          <AtInput
            name='linkman'
            title='联系人'
            type='text'
            value={this.state.form.linkman}
            onChange={this.onChangInput.bind(this, 'linkman')}
          />
          <AtInput
            name='phone'
            title='联系电话'
            type='text'
            value={this.state.form.phone}
            onChange={this.onChangInput.bind(this, 'phone')}
          />
          <AtInput
            name='address'
            title='所在地区'
            type='text'
            value={this.state.form.address}
          >
            <Picker
              mode='selector'
              range={this.state.addressOptions}
              onChange={this.onChangeAddress}
            >
              <View className='picker'>{this.state.selectorChecked}</View>
            </Picker>
          </AtInput>
          <AtInput
            name='detailAddress'
            title='详细地址'
            type='text'
            value={this.state.form.detailAddress}
            onChange={this.onChangInput.bind(this, 'detailAddress')}
          />
          <AtInput
            border={false}
            name='custRemark'
            title='备注说明'
            type='text'
            value={this.state.form.custRemark}
            onChange={this.onChangInput.bind(this, 'custRemark')}
          />
        </View>
      </View>
    );
  }
}

export default BookDetail;
