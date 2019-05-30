import {connect} from '@tarojs/redux';
import Taro, {Component} from '@tarojs/taro'
import {View, Text, RichText, Block} from '@tarojs/components'
import './index.css'
import {SAVE_QUESTION, GET_QUESTION} from '../../store/actions';
import allQuestionsReducer from "../../store/reducer/allQuestionsReducer";


class Index extends Component {

  config = {
    navigationBarTitleText: '考试'
  };

  constructor(props) {
    super(props);
    this.state = {

      index: 0
    }

  }


  componentWillMount() {
  }

  componentDidMount() {
    this.props.onGetData();
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

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

let mapStateToProps = (state) => {
  console.log(state);
  return {
    //  state.allQuestionsReducer.qTypeQs&&...state.allQuestionsReducer.qTypeQs[0].questions,
    // ...state[0].title,

    questions: state.allQuestionsReducer.qTypeQs&&state.allQuestionsReducer.qTypeQs[0].questions,
    title: state.allQuestionsReducer.qTypeQs&&state.allQuestionsReducer.qTypeQs[0].title

  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onGetData() {
      // 同步action
      //
      // dispatch({type:"",data:""})
      request(dispatch);
    }

  }
};

let request = (dispatch) => {
  Taro.request({
    url: "http://localhost:3000/result",
    success: function (res) {
      dispatch({type: SAVE_QUESTION, data: res.data})
    }
  })

};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
