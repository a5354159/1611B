// pages/day5zuoye2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:0,
      icon:'/imags/pic1.png',
      text:'招商银行',
    },{
      icon:'/imags/pic2.png',
      text:'中国工商银行',
      id:1
    },{
      icon:'/imags/pic3.png',
      text:'中国建设银行',
      id:2
    },{
      icon:'/imags/pic4.png',
      text:'中国农业银行',
      id:3
    },{
      icon:'/imags/pic5.png',
      text:'招商银行',
      id:4
    },{
      icon:'/imags/pic6.png',
      text:'浦发银行',
      id:5
    },{
      icon:'/imags/pic7.png',
      text:'兴业银行',
      id:6
    },{
      icon:'/imags/pic8.png',
      text:'华夏银行',
      id:7
    },{
      icon:'/imags/pic9.png',
      text:'中国邮政储蓄',
      id:8
    },{
      icon:'/imags/pic10.png',
      text:'广华银行',
      id:9
    },{
      icon:'/imags/pic11.png',
      text:'中国广大银行',
      id:10
    }],
  },
  sms(e){
    console.log(e)
    let curPages =  getCurrentPages();
    let item =  curPages[curPages.length-2];
    console.log(item)
    item.setData({
      text:e.currentTarget.dataset.item.text,
      icon:e.currentTarget.dataset.item.icon
    })
    wx.navigateBack({})
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