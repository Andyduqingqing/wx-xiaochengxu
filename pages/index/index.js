// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始化的数据',
    userInfo: {}
  },

  toList() {
    // 跳转页面 --- 保留当前页面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户登录的信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        // 更新状态
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail() {
        console.log('获取失败');
      }
    })

  },
  handleGetUserInfo(msg) {
    // 处理用户授权的回调
    console.log(msg)
    if (msg.detail.userInfo) {
      this.setData({
        userInfo: msg.detail.userInfo
      })
    }
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