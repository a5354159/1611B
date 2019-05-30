import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './fin.css'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
   
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render () {
   
    return (
      <View className='index'>
      
      </View>
    )
  }
}
