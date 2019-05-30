// pages/detail/inde.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q:'泡面',
    arr:[],
    limit:10,
    offset:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let obj = options.name;
    this.setData({
      q: obj
    })
    this.requestData(this.data.q,this.data.limit,this.data.offset)
  },
  jump(e){
    console.log(e)
  },
  requestData(q,limt,offset){
    wx.request({
      url: 'https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json?q=' + q + '&limit=' + limt + '&offset=' + offset,
      success: res => {
        console.log(res)
        this.setData({
         arr:res.data.content.content
        })
      }
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
    this.setData({
      offset: this.data.offset + 5
    })
    this.requestData(this.data.q, this.data.limit, this.data.offset)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      limit: this.data.limit + 10
    })
    this.requestData(this.data.q, this.data.limit, this.data.offset)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})