// pages/slider/slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      class: 'mainleft',
      img: 'http://www.ld12.com/upimg358/allimg/20160629/090117738694128.jpg',
      text: '预览字体大小'
    }, {
        class: 'mainright',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557644560955&di=fdc21470245866d8890b567c59267e6c&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-04-10%2F134544576.jpg',
        text: '拖动下面的滑块，可设置字体大小'
      }, {
        class: 'mainright',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557644560955&di=fdc21470245866d8890b567c59267e6c&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-04-10%2F134544576.jpg',
        text: '设置后，会改变聊天、菜单和朋友圈 中的字体大小。如果在使用过程中存在问题或意见，可反馈给微信团队'
      }],
    fontsize:30
  },

  slider2change(ev){
    this.setData({
      fontsize:ev.detail.value
    })
    console.log(ev.detail.value)
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