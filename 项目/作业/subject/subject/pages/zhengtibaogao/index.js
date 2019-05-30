import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.css";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      arr: []
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };
  componentWillMount() {
    let arr = wx.getStorageSync("arr");
    this.setState({
      arr
    });
  }
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
              <View>
                  {this.state.arr.map((item,index)=>(
                    <View className={item==undefined?'sn':item?"skyblue":"bigred"} key={index}>{index+1}</View>
                  ))}
              </View>
        <View />
      </View>
    );
  }
}
