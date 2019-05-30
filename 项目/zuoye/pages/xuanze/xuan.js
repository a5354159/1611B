// pages/xuanze/xuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[
      "招商银行","中国工商银行","中国建设银行","中国农业银行","浦发银行"
    ]
  },
  selectCity(event){
    console.log(event.target.dataset.item)
    let city = event.target.dataset.item;
    let curPages =  getCurrentPages();
   
    let ct = curPages[curPages.length-2]
    console.log(ct)
    ct.setData({
      city:city
    })
    wx.navigateBack({
  
    });
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