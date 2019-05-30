// pages/ques/ques.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrs: ["砂", "切", "不", "鱼", "花", "绣", "喜", "贝", "爱", "语", "让", "还", "口", "没", "我", "爱", "光", "欢", "你", "不", "热"],
    flag: false,
    list: [],
    len: 0
  },

  adds(e) {
    this.data.list.push(e.target.dataset.item);
    this.setData({ list: this.data.list });
    this.setData({ len: this.data.len + 1 });
    if (this.data.list.length >= 4) {
      return;
    }
  },

  zero() {
    this.setData({ len: 0 })
    this.setData({ list: [] })
  },

  change() {
    this.setData({ flag: true });
  },

  changes() {
    this.setData({ flag: false });
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