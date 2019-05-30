// pages/zhouzuoye2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:1,
      pic:'../../images/tou1.png',
      name:"刘永生",
      num:8484,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:2,
      pic:'../../images/tou2.png',
      name:"赶代码的贫农",
      num:8184,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:3,
      pic:'../../images/tou3.png',
      name:"王政",
      num:10258,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:4,
      pic:'../../images/tou4.png',
      name:"断然",
      num:15000,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:5,
      pic:'../../images/tou5.png',
      name:"张少杰",
      num:20000,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:6,
      pic:'../../images/tou6.png',
      name:"胡婷婷",
      num:4800,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:7,
      pic:'../../images/tou7.png',
      name:"白老姨",
      num:3200,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:8,
      pic:'../../images/tou8.png',
      name:"张春泽",
      num:16000,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    },{
      id:9,
      pic:'../../images/tou9.png',
      name:"董帅麟",
      num:8400,
      iconpath:'../../images/bqxin.png',
      selecticon:"../../images/bqxin1.png",
      flag:false
    }],
  },
  handljialing(ev){
    let arr = this.data.list;
    let id = ev.target.dataset.id;
    let index = this.data.list.findIndex(item=>item.id===id);
    arr[index].flag = !arr[index].flag;
    if(arr[index].flag){
      arr[index].iconpath='../../images/bqxin1.png'
    }else{
      arr[index].iconpath='../../images/bqxin.png'
    }
    this.setData({
      list:arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = this.data.list;
    arr.sort((a,b)=>b.num-a.num)
    this.setData({
      list:arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})