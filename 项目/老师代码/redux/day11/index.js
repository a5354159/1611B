import {connect} from '@tarojs/redux';
import Taro, {Component} from '@tarojs/taro'
import {View, Text, RichText, Block, Button} from '@tarojs/components'
import './index.css'
import {SAVE_QUESTION, GET_QUESTION} from '../../store/actions';


class Index extends Component {

  config = {
    navigationBarTitleText: '考试'
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      question: props.questions
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

  shouldComponentUpdate() {

  }

  clickItem(item) {
    //A:un B:null  C:item  D:"" 5:1  E:event
    console.log(item);
    let {index} = this.state;

    let {questions} = this.props;
    //2:选择的是什么  order userAnswer
    questions[index].userAnswer = item.order;
    //3:点的是第几题 : isFavorite
    questions[index].isFavorite = true;
    // questions[index]
    //1:切换题 index
    let newIndex = index;

    this.setState({
      index: ++newIndex
    });

    //存到仓库
    this.props.onSingleQuestions(questions);

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
              questions[index].questionChoices.map((item, i) => {
                return <View key={i} className='item' onClick={this.clickItem.bind(this, item)}>
                  <View className='order'>{item.order}</View>
                  <View className='content'>{item.content}</View>
                </View>
              })
            }
          </Block>
        </View>
        <Button type='primary' onClick={()=>{
            Taro.navigateTo({
              url:"/pages/day11_02/index"
            })

        }} className='card_btn'
        >答题卡</Button>
      </View>
    )
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    //  state.allQuestionsReducer.qTypeQs&&...state.allQuestionsReducer.qTypeQs[0].questions,
    // ...state[0].title,

    questions: state.allQuestionsReducer.qTypeQs && state.allQuestionsReducer.qTypeQs[0].questions,
    title: state.allQuestionsReducer.qTypeQs && state.allQuestionsReducer.qTypeQs[0].title

  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onGetData() {
      // 同步action
      //
      // dispatch({type:"",data:""})
      // request(dispatch);  //真 : {}
      dispatch(request); //假 方法
    },
    onSingleQuestions(questions){
      // 同步 :真  异步:假
      dispatch({type:"SAVE_SINGLE", data: questions})
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
