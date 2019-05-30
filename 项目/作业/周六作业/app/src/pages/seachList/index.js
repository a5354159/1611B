import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class SeachList extends Component {
    constructor() {
        super();
        this.state = {
          arr: [],
          value: ""
        };
      }
  config = {
    navigationBarTitleText: 'Search2'
  }

  componentWillMount () {
      console.log()
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Search2'>
        <Text>Search2</Text>
      </View>
    )
  }
}
