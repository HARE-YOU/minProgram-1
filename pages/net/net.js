// pages/net/net.js
import request from '../../service/network.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.原生方式请求
    // this.get_data_request()
    //2.封装请求
    request({
      url: ''
    }).then(res => {
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_request() {
    // console.log(options)
    // wx.request({
    //   url: '',
      // method: 'post',
      // data: {
      //   name : "zx",
      //   old: 18
      // }, 
      // success: function(res) {
      //   console.log(res)
      // },
    // })
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