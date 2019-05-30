// pages/kai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      text: "前端",
      flag: false
    }, {
      text: "后端",
      flag: false
    }, {
      text: "python",
      flag: false
    }, {
      text: "Html5",
      flag: false
    }, {
      text: "css",
      flag: false
    }, {
      text: "javascript",
      flag: false
    }, {
      text: "iOS",
      flag: false
    }, {
      text: "androld",
      flag: false
    }, {
      text: "前端",
      flag: false
    }, {
      text: "后端",
      flag: false
    }, {
      text: "python",
      flag: false
    }, {
      text: "Html5",
      flag: false
    }, {
      text: "css",
      flag: false
    }, {
      text: "javascript",
      flag: false
    }, {
      text: "iOS",
      flag: false
    }, {
      text: "androld",
      flag: false
    }, {
      text: "前端",
      flag: false
    }, {
      text: "后端",
      flag: false
    }, {
      text: "python",
      flag: false
    }, {
      text: "Html5",
      flag: false
    }, {
      text: "css",
      flag: false
    }, {
      text: "javascript",
      flag: false
    }, {
      text: "iOS",
      flag: false

    }, {
      text: "androld",
      flag: false
    }, {
      text: "前端",
      flag: false
    }, {
      text: "后端",
      flag: false
    }, {
      text: "python",
      flag: false
    }, {
      text: "Html5",
      flag: false
    }, {
      text: "css",
      flag: false
    }, {
      text: "javascript",
      flag: false
    }, {
      text: "iOS",
      flag: false
    }, {
      text: "androld",
      flag: false
    }]
  },
  add(e) {
    console.log(e)
    let flag = 'list[' + e.target.dataset.index + '].flag';
        
    this.setData({
      [flag]: !this.data.list[e.target.dataset.index].flag
    })
    console.log(this.data.list)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})