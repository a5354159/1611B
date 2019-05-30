import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  Image,
  Input,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import "./index.css";
export default class Swiepers extends Component {
    constructor(){
        super()
        this.state={
            bannerArr:[]
        }
    }
    config = {
      navigationBarTitleText: '搜索'
    }
  
    componentWillMount () { }
  
    componentDidMount () { 
        wx.request({
            url: "https://39916353.share1diantong.com/v1/home/index",
            method: "POST",
            success: res => {
              const arr = res.data.data.legaowei.template1.model3;
              const NewArr = [];
              for (var item in arr) {
                NewArr.push(arr[item]);
              }
              this.setState({
                bannerArr: NewArr
              });
            }
          });
    }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
        let {bannerArr} = this.state
      return (
        <View className='swiper'>
          <Swiper autoplay='true' indicator-dots='true' indicator-color='#000' indicator-active-color='#0f0'>
              {bannerArr.map((item,index)=>(
                    <SwiperItem key={index}>
                            <Image src={item.img}></Image>
                    </SwiperItem>
              ))}
          </Swiper>
        </View>
      )
    }
  }
  
