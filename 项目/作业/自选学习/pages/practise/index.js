// pages/practise/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
      name: "公共科目"
    },
    {
      name: "专业科目"
    }],
    newArr:{},
    newArrs:[],
    flag:true,
    arrs1:[],
    arrs2:[],
    names:''
  },
  class1(){
    this.setData({
      flag:true
    })
  },
  class2() {
    this.setData({
      flag: false
    })
  },
  checkboxChange1(e){
    console.log(e)
    let arr1 = [];
    e.detail.value.forEach(item=>{
      arr1.push(this.data.newArr.public[parseInt(item)])
    })
    this.setData({
      arr1:arr1
    })
  },
  checkboxChange2(e){
    console.log(e)
    let arr2 = [];
    e.detail.value.forEach(item => {
      arr2.push(this.data.newArr.major[parseInt(item)])
    })
    console.log(arr2)
    this.setData({
      arr2: arr2
    })
  },
  tapChange(e){
    let {show} = e.target.dataset;
    if(show==='1'){
      this.class1()
    }else{
      this.class2()
    }
  },
  jump(){
    if ((this.data.arr1) || (this.data.arr2)){
      let newArrs = this.data.arr1.concat(this.data.arr2);
      console.log(newArrs)
      this.setData({
        newArrs: newArrs
      })
      wx.setStorageSync('newArrs', this.data.newArrs);
      wx.switchTab({
        url: '/pages/practise2/index',
      })
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.edu-edu.com/exam-admin/real/public/subjects/json',
      success: (res) => {
        // console.log(res)
        this.setData({
          newArr: res.data.subjectMap
        })
        console.log(this.data.newArr)
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