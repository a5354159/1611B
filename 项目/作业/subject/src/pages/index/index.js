import { connect } from "@tarojs/redux";
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Data from "../../json.json";
import "./index.css";
import { GetDatas, SetDatas } from "../../store/valusRedux";
import aaa from '../../store/reducer'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {
    this.props.onGetDate();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let {title, questions} = this.props;
    let {index} = this.state;
    // console.log(this.props.questions);
    // console.log(this.props.title);
    return (
      <View className='index'>
        <View>{title}</View>
        <View className='line' />

        <RichText nodes={questions[index].title} />
        <View>
          <Block>
            {
              questions[index].questionChoices.map((item,i)=>{

                return <View key={i} className='item'>
                  <View className='order'>{item.order}</View>
                  <View className='content'>{item.content}</View>
                </View>
              })
            }

          </Block>
        </View>
      </View>
    )
  }
}
let mapStateToProps=(state) => {
  console.log(state);
  return {
    questions: state.aaa.qTypeQs&&state.aaa.qTypeQs[0].questions,
    title: state.aaa.qTypeQs&&state.aaa.qTypeQs[0].title
  };
};
let mapDisPatchToProps=(dispatch) => {
  return {
    onGetDate() {
      request(dispatch);
    }
  };
};
const request = dispatch => {
  dispatch({ type: GetDatas, value: Data });
};
export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(Index);
