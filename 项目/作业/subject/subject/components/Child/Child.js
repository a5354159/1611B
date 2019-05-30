import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Child.css'
export default class Child extends Component {
constructor(){
  super()
  this.state={
  }
}
  config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount () { 
   
    
  }
  componentDidMount () { 
 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      

        <slot></slot>
      </View>
    )
  }
}
