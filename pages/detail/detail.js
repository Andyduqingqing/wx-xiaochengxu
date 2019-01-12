// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
let dataArr = datas.list_data;

let appData = getApp()
console.log('app实例', appData, typeof appData);



Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    isMusicPlay: false, // 标识音乐是否播放
    isCollected: false // 标识文章是否被收藏
  },

  /**
   * 生命周期函数--监听页面加载w
   */
  onLoad: function (options) {
    console.log(options);
    // 获取路由参数
    let index = options.index;
    // 更新detailObj的状态
    this.setData({
      detailObj: dataArr[index],
      index
    })

    // 获取本地缓存的是否收藏的状态值
    let oldStorage = wx.getStorageSync('isCollected');
    if (oldStorage[index]) {
      // 更新isCollected的状态值
      this.setData({
        isCollected: true
      })
    }


    // 判断音乐是否在播放
    if (appData.data.pageIndex === index && appData.data.isPlay) {
      this.setData({
        isMusicPlay: true
      })
    }

    // 监视音乐播放
    wx.onBackgroundAudioPlay(() => {
      console.log('音乐播放');
      // 修改isMusicPlay状态
      this.setData({
        isMusicPlay: true
      })

      //  修改app实例的数据
      appData.data.pageIndex = index;
      appData.data.isPlay = true;
    })

    // 监视音乐暂停
    wx.onBackgroundAudioPause(() => {
      console.log('音乐暂停');
      // 修改isMusicPlay状态
      this.setData({
        isMusicPlay: false
      })

      //  修改app实例的数据
      // appData.data.pageIndex = index;
      appData.data.isPlay = false;
    })
  },
  handleCollection() {
    console.log('x');
    // 更新isCollected的状态
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected: isCollected
    })

    // 显示提示信息
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title,
      icon: 'success'
    })


    // 将是否收藏的状态缓存到本地
    // 注意： 多个文章页面不要共享一个状态
    // 理想化： {0: true, 1: false, 2: true}
    // 实现：对象， 下标
    let index = this.data.index;
    // let obj  = {};
    let obj = wx.getStorageSync('isCollected');
    console.log(obj, typeof obj);
    if (!obj) {
      // 之前没有缓存收藏的状态
      obj = {};
    }
    obj[index] = isCollected;


    wx.setStorage({
      key: 'isCollected',
      data: obj
    })

  },
  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到微博', '分享到qq空间']
    })
  },
  handleMusicPlay() {
    // 处理音乐播放功能
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    })

    let { dataUrl, title, coverImgUrl } = this.data.detailObj.music;
    if (isMusicPlay) {
      // 播放
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
    } else {
      // 暂停
      wx.pauseBackgroundAudio({})
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