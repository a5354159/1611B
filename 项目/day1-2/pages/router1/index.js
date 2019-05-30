// pages/router1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"小芳",
    obj:{
      telet:'山西',
      address:'山西太原'
    }
  },
  jump(){
    let obj = JSON.stringify(this.data.obj)
    wx.navigateTo({
      url:'/pages/router2/index?name='+this.data.name+'&obj='+obj
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('router1--------onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('router1--------onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('router1--------onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('router1--------onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('router1--------onUnload')
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