// pages/system/system.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selecttedIndex:0,
    list: [{
      type: "add",
      title: '老师的行为举止对你的影响？',
      checks: [{
        content: "受益匪浅",
        checkod:false
      }, {
        content: "积极向上",
          checkod: false
      }, {
        content: "毫无感觉",
          checkod: false
      }, {
        content: "态度恶劣",
          checkod: false
      }]
    }, {
      type: "even",
      title: '老师是否提前进班？',
      checks: [{
        content: "提前进班",
           checkod:false
      }, {
        content: "准时进班",
           checkod:false
      }, {
        content: "偶尔迟到",
         checkod:false
      }, {
        content: "天天迟到",
         checkod:false
      }]
    }, {
        type: "even",
      title: '老师的授课方式让你是否听懂？',
      checks: [{
        content: "全部听懂",
         checkod:false
      }, {
        content: "偶尔听懂",
         checkod:false
      }, {
        content: "部分听懂",
         checkod:false
      }, {
        content: "完全听不懂",
         checkod:false
      }]
    }]
  },
  preve(){
    this.setData({
      selecttedIndex: this.data.selecttedIndex-1
    })
  },
  next() { 
    this.setData({
      selecttedIndex: this.data.selecttedIndex + 1
    })
  },
  sub() { },
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