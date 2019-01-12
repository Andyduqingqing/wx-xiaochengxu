// pages/list/list.js
let datas = require('../../datas/list-data.js');
console.log(typeof datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datasArr: []
  },
  toDetail(event) {
    console.log(event);
    //获取点击跳转对应的下标
    let index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    // 修改状态
    // react： this.setState()
    // vue: this.xxx = value
    // 小程序修改状态
    this.setData({
      datasArr: datas.list_data,
      msg: '666'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
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