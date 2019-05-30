import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "英语（一） ﹀"
  };
  clickHandler(e){
    console.log(e)
    console.log('111111111111')
  }
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
 
  }



  componentWillMount() {}

  componentDidMount() {
    wx.request({
      url: "http://www.edu-edu.com/exam-admin/real/public/exams/json/194",
      success: res => {
        console.log(res.data.exams);
        this.setState({
          arr: res.data.exams
        });
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <image
          style=" width:100%;height:198rpx;padding:0 40rpx;box-sizing:border-box;border-radius: 30rpx"
          src="../../static/images/pic1.png"
        />
        <view class="title">- 历年真题 -</view>
        <view class="content" onClick={this.clickHandler}>
          {this.state.arr.map((item, index) => (
            <view key={index}> <image src="../../static/images/icon3.png"></image>{item.examTitle}</view>
          ))}
        </view>
      </View>
    );
  }
}
