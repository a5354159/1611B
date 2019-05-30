// pages/tab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title: "我想见的",
        id:0,
        children:{
          title:"前端技术分享会",
          name:"johnny",

        }
      },
      {
        title: "约见记录",
        id:1,
        children: {
          title: "java免费教学",
          name: "johnny",
        }
      }
    ],
    selectIndex:0
  },
  click(e){
    let index = e.target.dataset.index;
    this.setData({
      selectIndex:index,
      children:this.data.list[index].children
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