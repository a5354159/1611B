// pages/seach/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"",
    arr:[]
  },
  inp(ev){
    console.log(ev)
    this.setData({
      val:ev.detail.value
    })
    if (this.data.val){
      console.log(this.data.val)
      wx.request({
        url: 'https://www.xiachufang.com/juno/weapp/v2/search/prefix_keyword_suggester.json?q=' + this.data.val,
        success: (res) => {
          this.setData({
            arr: res.data.content.keywords
          })
        }
      })
    }
  
  },
  jump(e){
    console.log(e)
    let item = e.target.dataset.item;
    wx.navigateTo({
      url: '/pages/detail/inde?name=' + item
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