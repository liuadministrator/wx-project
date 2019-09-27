// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1906,
    count:2019,
    imgUrls:[
      "../../images/banner/1.jpg",
      "../../images/banner/2.jpg",
      "../../images/banner/3.jpg",
      "../../images/banner/4.jpg",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    id:1906,
    hi:"hello world",
    word:"为了世界和平",
    flag:true,
    todos:[
      {
        name:"leson",
        age:18,
        word:"世界和平"
      },
      {
        name:"zuozuomu",
        age:28,
        word:"一天天的"
      }
    ],
    userData:{
      username: 'xiaochen', 
      salary: '20000', 
      address: '金融港'
    },
    actionData:{
      items: ["办理移民", "办理出国", "办理护照", "拍照"],
      actionHidden:true,
    },
    loginData:{
      madalHidden:false,
      mobile:"",
      code:"",
    }
  },
  loginto(){
    wx.request({
      url: 'https://peng47.com:2906/react/checkCode',
      method:"POST",
      data:{
        mobile: this.data.loginData.mobile,
        code:this.data.loginData.code
      },
      success:res=>{
        wx.setStorageSync("isLogin",!!res.data.type)
        this.setData({
          "loginData.modalHidden":!res.data.type
        })
      }
    })
  },
  getMobile(e){
    this.setData({
      "loginData.mobile":e.detail.value
    })
  },
  getCode(e){
    this.setData({
      "loginData.code":e.detail.value
    })
  },
  logincancel(){
    this.setData({
      "loginData.modalHidden":false
    })
  },
  sendCode(){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://peng47.com:2906/react/sendCode',
      method:"POST",
      data:{
        mobile:this.data.loginData.mobile,
      },
      success:res=>{
        console.log(res)
        wx.showToast({
          title: res.data.msg
        })
        wx.hideLoading();
      }
    })
  },
  openmyAction(){
    this.setData({
      "actionData.actionHidden":false
    })
  },
  actioncancel(){
    this.setData({
      "actionData.actionHidden": true
    })
  },
  changeItem(e){
    console.log(e.target.dataset.idx)
    wx.showToast({
      title: this.data.actionData.items[e.target.dataset.idx] +"成功",
    })
    this.setData({
      "actionData.actionHidden": true
    })
  },
  openactionsheet(){
    var that = this
    wx.showActionSheet({
      itemList: this.data.actionData.items,
      success (res){
        console.log(res.tapIndex)
        wx.showToast({
          title: that.data.actionData.items[res.tapIndex] + "成功",
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  openModal(){
    wx.showModal({
      title: '流量警告',
      content: '你正在使用移动网络观看视频',
      cancelText:"取消观看",
      cancelColor:"#ccc",
      confirmColor:"#f0f",
      confirmText:"继续观看",
      success:res=>{
        if(res.confirm){
          console.log("有钱任性，就用流量观看")
          wx.showToast({
            title: '土豪，请继续',
          })
        }else if(res.cancel){
          console.log("没钱的还是默默退出")
          wx.showToast({
            title: '请切换WiFi',
          })
        }
      }
    })
  },
  getNewnumber(e){
    console.log(e)
    this.setData({
      num:this.data.num+=e.detail.n
    })
  },
  parent(){
    wx.showToast({
      title: '这是父节点的事件',
      icon:"success",
      duration:2000
    })
  },
  childOne(){
    console.log("childOne ---- bind")
  },
  childTwo(){
    console.log("childTwo ---- catch")
  },
  tapName(e){
    console.log(e)
  },
  changeCheck(e){
    this.setData({
      flag:e.detail.value
    })
  },
  getdetail(e){
    this.setData({
      id:this.data.id+=10
    })
  },
  getWord(e){
    this.setData({
      word:e.detail.value
    })
  },
  changeNum(){
    this.setData({
      num:++this.data.count
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    // this.setData({
    //   "loginData.modalHidden":!!wx.getStorageSync("isLogin")
    // })
    if(wx.getStorageSync("isLogin")){
      console.log(0)
      this.setData({
        "loginData.modalHidden":false
      })
    }else{
      this.setData({
        "loginData.modalHidden": true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
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
    return {
      title:"武汉2019",
      path:"/pages/home/home?id=123"
    }
  }
})