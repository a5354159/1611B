// pages/router2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    newObj:{},
    city:''
  },
  jump(){
    wx.navigateTo({
      url:"/pages/router3/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let name = options.name;
    let newObj = JSON.parse(options.obj)
    this.setData({
      name: name,
      newObj:newObj
    })
    console.log('router2--------onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('router2--------onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('router2--------onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('router2--------onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('router2--------onUnload')
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