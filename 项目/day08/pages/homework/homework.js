// pages/homework/homework.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    public:[],
    major:[],
    list: ['公共科目','专业科目'],
    publicAdd:[]
  },
  clcikbtn(){
    this.setData({
      isShow:true
    })
  },
  clcikmajor(){
    this.setData({
      isShow:false
    })
  },
  radioChange(e){
    let value = e.detail.value
    console.log(e)
    this.data.publicAdd.push(value)
    if (e.currentTarget.dataset=='index'){
      this.data.public[e.currentTarget.dataset.index].bank.active=true
      this.setData({
        public: this.data.public,
      })
    } else if (e.currentTarget.dataset == 'item'){
       this.data.major[e.currentTarget.dataset.item].bank.active=true
        this.setData({
          major: this.data.major,
        })
    }
    this.setData({
      publicAdd: this.data.publicAdd,
    })
    console.log(this.data.publicAdd)
  },
  clcikAll(){
    let data = JSON.stringify(this.data.publicAdd)
    wx.navigateTo({
      url: '/pages/list/list?obj=' + data,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.edu-edu.com/exam-admin/real/public/subjects/json',
      success:(res)=>{
        console.log(res.data.subjectMap.public, res.data.subjectMap.major)
        this.setData({
          public: res.data.subjectMap.public,
          major: res.data.subjectMap.major
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