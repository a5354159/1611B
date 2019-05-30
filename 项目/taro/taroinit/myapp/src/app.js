import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      "pages/practise2/index",
      "pages/practise3/index",
      "pages/practise4/index"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    "tabBar": {
      "list": [{
        "selectedcolor":"#00f",
        "pagePath": "pages/index/index",
        "iconPath":"static/images/icon1(1).png",
        "selectedIconPath":"static/images/icon1.png",
        "text": "真题练习"
      },{
        "pagePath": "pages/practise2/index",
        "iconPath":"static/images/icon2(2).png",
        "selectedIconPath":"static/images/iocn2.png",
        "text": "视频课程"
      },{
        "pagePath": "pages/practise3/index",
        "iconPath":"static/images/icon3(3).png",
        "selectedIconPath":"static/images/icon3.png",
        "text": "学习中心"
      },{
        "pagePath": "pages/practise4/index",
        "iconPath":"static/images/icon4(4).png",
        "selectedIconPath":"static/images/icon4.png",
        "text": "我的账号"
      }]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
