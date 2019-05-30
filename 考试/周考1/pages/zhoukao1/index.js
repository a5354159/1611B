// pages/zhoukao1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:1,
      name:'开通会员',
      text:"开通会员两折起价先到先得 售完为止",
      type:'新会员'
    },{
      id:2,
      name:'会员有了',
      text:"吃喝玩乐",
      type:'老会员'
    },{
      id:3,
      name:'没有会员',
      text:"花两倍的钱，让自己哭去吧",
      type:'无会员'
    }],
    tablist:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let appInstance = getApp()
    console.log(appInstance.globalData.list);
    let arr = appInstance.globalData.list;
    this.setData({
      tablist:arr
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