// pages/day2/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:500,
    imgUrls:[
      "http://img1.imgtn.bdimg.com/it/u=1511566516,3590100764&fm=214&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=1823751330,3810036842&fm=26&gp=0.jpg",
      "http://img2.imgtn.bdimg.com/it/u=2233710390,2273016174&fm=26&gp=0.jpg",
    ]
  },
  click:function(ev){
    console.log(ev)
    wx.showModal({
      title: '提示',
      content:ev.target.dataset.index+"",
      success(res) {
          if (res.confirm) {
          console.log('用户点击确定')
          } else if (res.cancel) {
          console.log('用户点击取消')
          }
      }
  })
  },
  up(){
    console.log('up')
  },
  down(){
    console.log('down')
  },
  sclll(){

  },

randoms(maxNum) {
		let randoms = Math.floor(Math.random() * maxNum);
		return randoms;
	}, 

	chinese() {
		// \u4e00 - \u9fa5
		let arr = [
			[4, 5, 6, 7, 8, 9],
			['e', 'f'],
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a'],
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
		];

		let len1 = arr[0].length;
		let len2 = arr[1].length;
		let len3 = arr[2].length;
		let len4 = arr[3].length;

		let len = [len1, len2, len3, len4];
		let start = '%u';

		for (let i = 0; i < 4; i++) {
			let num = this.randoms(len[i]);
			start += arr[i][num];
			start = unescape(start);
		};

		return start;
	},
	
	onLoad: function (options) {
		let arr = [];
		for(let i=0; i<21; i++) {
			arr.push(this.chinese())
		};

		console.log(arr);
	},

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   let appInstance = getApp();
  //   console.log(appInstance.globalData.food)
  // },

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