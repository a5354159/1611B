import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.css";
import data from "../../mock/json.json";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      ind: 0,
      sle: 0,
      flag: false
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };
  componentWillMount() {
    this.setState({
      list: data.qTypeQs
    });
  }
  componentDidMount() {
    console.log(this.state.list);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  tiao() {
    this.setState({
      ind: ++this.state.ind
    });
  }
  xuan(e) {
    let arr = [];
    let order = e.target.dataset.item.order;
    // console.log(order);
    if (
      data.qTypeQs[this.state.ind].questions[this.state.sle].answer ===
      order.toUpperCase()
    ) {
      data.qTypeQs[this.state.ind].questions[this.state.sle].issuer = true;
    } else {
      data.qTypeQs[this.state.ind].questions[this.state.sle].issuer = false;
    }
      data.qTypeQs.forEach((item)=>{
        arr.push(item)
      })
    
    this.setState({
      list:arr
    })
  }
  del() {
    this.setState({
      sle: --this.state.sle
    });
  }
  add() {
    
    if (data.qTypeQs[this.state.ind].questions.length <= this.state.sle + 1) {
      return;
    }

    this.setState({
      sle: ++this.state.sle
    });
    console.log(this.state.sle);
  }
  sub() {
    let NewArr = []
    this.state.list[0].questions.forEach((item)=>{
        NewArr.push(item.issuer)
    })
    console.log(NewArr)
    wx.setStorage({
      key: 'arr',
      data: NewArr
    })
    wx.navigateTo({
      url:"/pages/zhengtibaogao/index"
    })
  }
  render() {
    let { list, ind, flag } = this.state;
    return (
      <View className="index">
        <View>
          <View class="tits">{list[ind].title}</View>
          <View>
            {list[ind].questions.length > 0 ? (
              list[ind].questions.map((item, index) => (
                <View
                  key={index}
                  style={
                    this.state.sle === index ? "display:block" : "display:none"
                  }
                >
                  {item.title}
                  {this.state.sle === index ? (
                    item.questionChoices.map((ite, inds) => (
                      <View
                        key={inds}
                        onClick={this.xuan}
                        data-item={ite}
                        data-index={inds}
                      >
                        {ite.order.toUpperCase()} : {ite.content}
                      </View>
                    ))
                  ) : (
                    <View>抱歉 -----没有数据了</View>
                  )}
                  <Button
                    style={
                      this.state.sle > 0 ? "display:block" : "display:none"
                    }
                    onClick={this.del}
                  >
                    上一题
                  </Button>
                  <Button
                    style={
                      list[ind].questions.length - 1 > this.state.sle
                        ? "display:block"
                        : "display:none"
                    }
                    onClick={this.add}
                  >
                    下一题
                  </Button>
                  <Button
                    style={
                      list[ind].questions.length - 1 === this.state.sle
                        ? "display:block"
                        : "display:none"
                    }
                    onClick={this.sub}
                  >
                    上传提交
                  </Button>
                </View>
              ))
            ) : (
              <View>抱歉 -----没有数据了</View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
