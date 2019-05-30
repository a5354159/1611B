// pages/router3/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cityList:['北京','上海','东京','南京']
  },
  selectcity(ev){
    let curPages =  getCurrentPages();
    let city = curPages[curPages.length-2];
    console.log(curPages[curPages.length-1])
    city.setData({
      city:ev.target.dataset.item
    })
    wx.navigateBack({})

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('router3--------onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('router3--------onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('router3--------onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('router3--------onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('router3--------onUnload')
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