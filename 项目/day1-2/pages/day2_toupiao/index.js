// pages/day2_toupiao/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: "张三",
        num: 0,
        id: 0
      },
      {
        name: "李四",
        num: 0,
        id: 1
      },
      {
        name: "王五",
        num: 0,
        id: 2
      },
      {
        name: "马六",
        num: 0,
        id: 3
      }
    ],
    maxnum: ""
  },
  maxnum(){
    let sorts = this.data.list.map(item=> item.num)
    console.log(sorts)
    let max = sorts.sort((a,b)=>b-a);
    this.setData({maxnum:this.data.list.find(item=>item.num===max[0]).name})
  },
  del(ev) {
    let id = ev.target.dataset.id;
    let arr = this.data.list;
    let index = arr.findIndex(item => item.id === id);
    if (arr[index].num > 0) {
      arr[index].num = arr[index].num - 10;
      this.setData({
        list: arr
      });
    }
  },
  add(ev) {
    let id = ev.target.dataset.id;
    let arr = this.data.list;
    let index = arr.findIndex(item => item.id === id);
    this.data.list[index].num = arr[index].num + 10;
    this.setData({ list: arr });
    this.maxnum()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
