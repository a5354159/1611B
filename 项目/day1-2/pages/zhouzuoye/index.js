// pages/zhouzuoye/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      class:'imgRight',
      img:'../../images/pic1.png',
      text:'预览字体大小',
      id:1
    },
    {
      class:'imgleft',
      img:'../../images/weixin1.jpg',
      text:'拖动下面的滑块，可以设置字体大小',
      id:2
    },{
      class:'imgleft',
      img:'../../images/weixin1.jpg',
      text:'设置后,会改变聊天,菜单和朋友圈中的字体大小。如果在使用过程中，纯在的问题或者意见，可以反馈给微信团队',
      id:2
    }],
    fontSizi:30
  },

  slider2change(ev){
    console.log(ev)
    this.setData({
      fontSizi:ev.detail.value
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