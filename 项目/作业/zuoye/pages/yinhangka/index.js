// pages/xuanze/xuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yinhangka:[
      "招商银行-储蓄卡","中国工商银行-储蓄卡","中国建设银行-储蓄卡","中国农业银行-储蓄卡","浦发银行-储蓄卡"
    ]
  },
  yinhang(event){
    let {item} = event.target.dataset;
    console.log(item)

    //1:值 获取 到  放到上一个页面 city
    //本地存储
    let current =getCurrentPages();
    //current : 数组
    let page2This = current[current.length-2]

    page2This.setData({
      pink:item
    })
    console.log(current)
    
    //2:页面销毁 跳过去
    wx.navigateBack({
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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