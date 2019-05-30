import Taro, { Component } from "@tarojs/taro";
import { View, Text, } from "@tarojs/components";
import "./index.css";

export default class ShoppClassify extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      cateTag:'美妆'
    };
  }
  config = {
    navigationBarTitleText: "shopp",
    enablePullDownRefresh:true
  };

  componentWillMount() {}

  componentDidMount() {
    wx.request({
      url: "https://jbiz.share1diantong.com//as/index/cate/v1",
      method: "POST",
      data: {
        cateTag: this.state.cateTag, // 全部  || 品牌  || …
        fixedFlower: 1, //一口花  1 或者 0
        isNew: 1, //是否全新  1 或者 0
        isLocal: 1, // 是否同城   1或者0
        status: 1,
        bid: 0,
        orderBy: 0,
        pageSize: 20, // 页数
        pageNum: 1 // 分页值
      },
      success: res => {
        if (res.data.success) {
          this.setState({
            list: res.data.data.recommends
          });
          console.log(res.data.data.recommends);
        }
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { list } = this.state;
    return (

      <View className="shopp">
        {list.map((item, index) => (
          <View key={index} >
            <Image src={item.topicPic} />
            <View>
              <View>{item.userName}</View>
              <View>{item.optinfo.priceTypeDesc}</View>
              <View className='pinjia'>
                <View>{item.topicLikeCount}</View>
                <View>{item.homeCity}</View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
