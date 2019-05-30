import {connect} from "@tarojs/redux";
import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.css'


class Index extends Component {

  config = {
    navigationBarTitleText: '考试题'
  };

  constructor(props) {
    super(props);
    this.state = {}
  }


  componentWillMount() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='card'>
        {
          this.props.questions.map((item, key) => {

            return <View className={item.isFavorite ? "select" : "normal"}>
              {key + 1}
            </View>
          })
        }

      </View>
    )
  }
}

let mapStateTpProps = (state) => {
  return {
    questions: state.singleQuestions
  }

};

export default connect(mapStateTpProps)(Index);
