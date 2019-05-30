// pages/zhoukao23/xuanze.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [{
      img: "/images/pic1.png"
    }, {
      img: "/images/pic2.png"
    }, {
      img: "/images/pic3.png"
    }, {
      img: "/images/pic4.png"
    }, {
      img: "/images/pic5.png"
    }],
    list: [{
      name: "亲情卡",
      picdux: 1000
    }, {
      name: "亲情卡",
      picdux: 800
    }, {
      name: "亲情卡",
      picdux: 500
    }, {
      name: "亲情卡",
      picdux: 188
    }, {
      name: "亲情卡",
      picdux: 166
    }, {
      name: "亲情卡",
      picdux: 88
    }, {
      name: "亲情卡",
      picdux: 66
    }, {
      name: "亲情卡",
      picdux: 18
    }, {
      name: "亲情卡",
      picdux: 16
    }],
    newpicdux: 0,
    selectActive: 0,
    selectActive2: 0,
    selectImg: ''
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
  click(e) {
    let index = e.currentTarget.dataset.index * 1;
    this.setData({
      selectActive: index * 1,
      selectImg: e.currentTarget.dataset.item.img
    })
  },
  xuan(e) {
    let index = e.currentTarget.dataset.index * 1;
    let obj = e.currentTarget.dataset.item;
    console.log(obj)
    this.setData({
      selectActive2: index * 1,
      newpicdux: obj.picdux
    })
    console.log(e)
  },
  onjump() {
    if (this.data.selectImg !== '' && this.data.newpicdux !== 0) {
      wx.navigateTo({
        url: "/pages/zhoukao22/detail?img=" + this.data.selectImg + '&newpicdux=' + this.data.newpicdux
      })
    }

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