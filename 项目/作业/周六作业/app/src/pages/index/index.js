import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  Image,
  Input,
  Swiper,
  SwiperItem,
  ScrollView
} from "@tarojs/components";
import "./index.css";
import { Swiepers } from "../../component/Swiepers";
import { ShoppClassify } from "../../component/ShoppClassify";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchContent: "请搜索您要找的人或物",
      img: "/images/titBanner.png",
      navList:[{
        navpic:'/images/navpic1.png',
        tit:'拼团'
      },{
        navpic:'/images/navpic2.png',
        tit:'送书'
      },{
        navpic:'/images/navpic3.png',
        tit:'享GO'
      },{
        navpic:'/images/navpic4.png',
        tit:'故事'
      },{
        navpic:'/images/navpic5.png',
        tit:'签到'
      }],
      navClick:[{
        tit:'全部'
      },{
        tit:'品牌'
      },{
        tit:'时尚'
      },{
        tit:'美装'
      },{
        tit:'母婴'
      }]
    };
  }
  config = {
    navigationBarTitleText: "享物悦",
    navigationBarBackgroundColor: "#34C25E",
    navigationBarTextStyle: "white"
  };

  componentWillMount() {}

  componentDidMount() {
   
  }
  ToSearch(){
    wx.switchTab({
      url:'/pages/seach/index'
    })
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    let { searchContent, img, navList,navClick } = this.state;
    return (
      <View className="index">
        <View className="header">
          <View className="search" onClick={this.ToSearch}>
            <Input placeholder={searchContent} />
          </View>
          <View className="titimg">
            <Image src={img} />
          </View>
        </View>
        <View className="seaction">
          <View className="main-Nav" >
            {
              navList?navList.map((item,index)=>(
                <View key={index}>
                  <Image src={item.navpic}></Image>
                  <View>{item.tit}</View>
                </View>
              )):null
            }
          </View>
          <View className="main-Banner">
            <Swiepers />
            <View />
          </View>
          <View className="main-Tab">
          {/* <ScrollView scroll-y className='myScroll'></ScrollView> */}
          <View className='NavClick'>
              {navClick.map((item,index)=>(
                <View>{item.tit}</View>
              ))}
          </View>
          <ShoppClassify></ShoppClassify>
          </View>
        </View>
      </View>
    );
  }
}
