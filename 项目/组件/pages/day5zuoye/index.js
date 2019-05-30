// pages/day5zuoye/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"请选择银行",
    val:'',
    icon:'',
    name:'朱小明'
  },
  jump2(){
    wx.navigateTo({
      url:'/pages/day5zuoye2/index'
    })
  },
  inp(ev){
    this.setData({
      val:ev.detail.value
    })
  },
  jumps(){
    if(this.data.text&&this.data.val){
      wx.navigateTo({
        url:'/pages/day5zuoye3/index?text='+
        this.data.text+'&val='+
        this.data.val+'&iocn='+
        this.data.icon+'&name='+
        this.data.name
      })
    }
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