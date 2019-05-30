// pages/day5zuoye3/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vals:'',
    name:'',
    city:'',
    text:'',
    icon:'',
    val:''
  },


  inpt(e){
    this.setData({
      vals:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  jumps(){
    if(this.data.val&&this.data.icon&&this.data.text){
      wx.navigateTo({
        url:"/pages/day5zuoye5/index?text="+
        this.data.text+'&val='+
        this.data.val+'&iocn='+
        this.data.icon
      })
    }
  },
  jumps4(){
    wx.navigateTo({
      url:"/pages/day5zuoye4/index"
    })
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      text:options.text,
      name:options.name,
      icon:options.iocn,
      val:options.val
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