import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Input } from "@tarojs/components";
import "./index.css";

export default class Seach extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      value: ""
    };
  }
  config = {
    navigationBarTitleText: "搜索"
  };
  Seach(e) {
    this.setState({
      value: e.detail.value
    });
    let time = setTimeout(()=>{
      wx.request({
        url: "https://jbiz.share1diantong.com/fa053/search/associateKw",
        data: {
          kw: this.state.value
        },
        method: "POST",
        success: res => {
          this.setState({
            arr:res.data.data.output.kwRes
          })
          clearTimeout(time)
        }
      });
    },1000)
    
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handlClick(e){
    wx.reLaunch({
      url: '/pages/seachList/index?id=2&type=test'
    })
  }
  render() {
    let { value , arr} = this.state;
    return (
      <View className="seach">
        <View className="seach-Input">
          <View>
            <Input
              placeholder="请输入请搜索您要找的人或物"
              value={value}
              onInput={this.Seach}
            />
            <View>取消</View>
          </View>
        </View>
        <View className="seach-Content">
            <View>{
              arr?arr.map((item,index)=>(
                <View onClick={this.handlClick} key={index} data-item={item}>
                    <Text>{item}</Text>
                </View>
              )):'抱歉，没有您要搜索的物品'
            }</View>
        </View>
      </View>
    );
  }
}
