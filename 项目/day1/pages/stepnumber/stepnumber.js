// pages/stepnumber/stepnumber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: '流年灬未亡',
      stepnumber: 5666,
      praise: 0,
      img: 'http://www.ld12.com/upimg358/allimg/20160629/090117738694128.jpg',
      id: 0,
      icon: 'bqxin.png'
    }, {
      name: '舞动Dē灵魂￠',
      stepnumber: 5799,
      praise: 0,
      img: 'http://img18.3lian.com/d/file/201711/24/529494b4dc8b9368cbf309e29be38f90.png',
      id: 1,
      icon: 'bqxin.png'
    }, {
      name: '别在我面前犯贱',
      stepnumber: 6291,
      praise: 0,
      img: 'http://pic1.16pic.com/00/56/94/16pic_5694372_b.jpg',
      id: 2,
      icon: 'bqxin.png'
    }, {
      name: '__没有背景丶只有背影',
      stepnumber: 6665,
      praise: 0,
      img: 'http://pic34.photophoto.cn/20150322/0005018374674253_b.jpg',
      id: 3,
      icon: 'bqxin.png'
    }, {
      name: '乂日光倾城¤',
      stepnumber: 3581,
      praise: 0,
      img: 'http://img18.3lian.com/d/file/201710/28/cd9f31b03b7df9a7e28b92b683bc2e2b.jpg',
      id: 4,
      icon: 'bqxin.png'
    }, {
      name: '丶猫猫er',
      stepnumber: 6985,
      praise: 0,
      img: 'http://tx.haiqq.com/uploads/allimg/c161203/14PFJX3120-62509.jpg',
      id: 5,
      icon: 'bqxin.png'
    }, {
      name: '雪花ミ飞舞',
      stepnumber: 7589,
      praise: 0,
      img: 'http://www.jf258.com/uploads/2013-07-20/022239859.jpg',
      id: 6,
      icon: 'bqxin.png'
    }, {
      name: '在哪跌倒こ就在哪躺下',
      stepnumber: 9454,
      praise: 0,
      img: 'http://img2.3png.com/07b417019945c4cac5bc2f217bcbbfce50b2.png',
      id: 7,
      icon: 'bqxin.png'
    }, {
      name: '淡抹丶悲伤',
      stepnumber: 15424,
      praise: 0,
      img: 'http://pic122.nipic.com/file/20170216/24179748_180921674036_2.jpg',
      id: 8,
      icon: 'bqxin.png'
    }, {
      name: 'メ稀饭你的笑',
      stepnumber: 9854,
      praise: 0,
      img: 'http://p5.ssl.qhimg.com/t01abf2f85d4e198142.jpg?size=600x600',
      id: 9,
      icon: 'bqxin.png'
    }, {
      name: '﹏﹏那年一路向北',
      stepnumber: 10205,
      praise: 0,
      img: 'http://img2.woyaogexing.com/2017/04/30/6dbc9bd4f36c1773%21400x400_big.jpg',
      id: 10,
      icon: 'bqxin.png'
    }]
  },

  clickpraise(ev){
    let arr = this.data.list;
    let index = arr.findIndex(item=>item.id === ev.target.dataset.id);
    if (arr[index].icon === 'bqxin.png'){
      arr[index].icon = 'bqxin (1).png';
      arr[index].praise = arr[index].praise + 1;
    }else{
      arr[index].icon = 'bqxin.png';
      arr[index].praise = arr[index].praise - 1;
    }
    
    this.setData({
      list:arr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let arr = this.data.list;
    arr.sort((a, b) => {
      return b.stepnumber - a.stepnumber;
    })
    this.setData({
      list: arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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