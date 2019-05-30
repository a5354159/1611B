// pages/practise2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    nameArr: [],
    name: ""
  },
  bindPickerChange(e) {
    let index = e.detail.value;
    this.setData({
      name: this.data.nameArr[index]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let arr = wx.getStorageSync('newArrs');
    let nameArr = [];
    this.setData({
      arr: arr
    })
    this.data.arr.forEach(item => {
      console.log(item)
      nameArr.push(item.name);
      this.setData({
        nameArr
      })
      console.log(nameArr)
    })
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