// pages/mine/mine.js
let timer=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    percent:0,
    banner:[]
  },
  getBanner(){
    wx.request({
      url: 'https://peng47.com:2906/vue/movie',
      data:{
        limit:6
      },
      success:res=>{
        console.log(res.data.result)
        this.setData({
          banner:res.data.result
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    timer = setInterval(()=>{
      if(this.data.percent<100){
        this.setData({
          percent:++this.data.percent
        })
      }else{
        clearInterval(timer);
        this.setData({
          show:false
        })
        this.getBanner(); 
      }
      
    },50)
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