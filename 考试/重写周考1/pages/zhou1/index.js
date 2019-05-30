// pages/zhou1/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: "满减特价",
        icon: "../../images/icon1.png",
        id: 0,
        children: {
          contents: "内容1111111111111111111",
          type: "vip1"
        }
      },
      {
        name: "会员特价",
        icon: "../../images/icon2.png",
        id: 1,
        children: {
          contents: "内容2222222222222",
          type: "vip2"
        }
      },
      {
        name: "满减特价",
        icon: "../../images/icon1.png",
        id: 2,
        children: {
          contents: "内容1111111111111111111",
          type: "vip1"
        }
      },
      {
        name: "会员特价",
        icon: "../../images/icon2.png",
        id: 3,
        children: {
          contents: "内容2222222222222",
          type: "vip2"
        }
      },
      {
        name: "满减特价",
        icon: "../../images/icon1.png",
        id: 4,
        children: {
          contents: "内容1111111111111111111",
          type: "vip1"
        }
      },
      {
        name: "会员特价",
        icon: "../../images/icon2.png",
        id: 5,
        children: {
          contents: "内容2222222222222",
          type: "vip2"
        }
      },
      {
        name: "满减特价",
        icon: "../../images/icon1.png",
        id: 6,
        children: {
          contents: "内容1111111111111111111",
          type: "vip1"
        }
      },
      {
        name: "会员特价",
        icon: "../../images/icon2.png",
        id: 7,
        children: {
          contents: "内容2222222222222",
          type: "vip2"
        }
      }
    ],
    selectIndex:0,
    obj:[]
  },
  handlClick(ev){
    // console.log(ev)
    let index = ev.target.dataset.index;
    this.setData({
      obj:this.data.list[index].children,
      selectIndex:index,
    })
  },
  change(ev){
    console.log(ev)
    let current = ev.detail.current;
    this.setData({
      selectIndex:current,
      obj:this.data.list[current].children
    })
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
