// pages/ying/ying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [{
      name: '招商银行'
    }, {
      name: '中国工商银行'
    }, {
      name: '中国建设银行'
    }, {
      name: '中国农业银行'
    }, {
      name: '中国银行'
    }, {
      name: '浦发银行'
    }, {
      name: '兴业银行'
    }, {
      name: '华夏银行'
    }, {
      name: '广发银行'
    }]
  },
  yinghangka(ev){
    let ka = ev.target.dataset;
    let getCurrent= getCurrentPages();
     let sm = getCurrent[getCurrent.length-2];
     sm.setData({
       yinhang:ka
     })
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