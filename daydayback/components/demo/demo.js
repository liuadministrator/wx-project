// components/demo/demo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    word:String,
    hi:String,
    msg:String
  },
  lifetimes:{
    attached:function(){
      console.log("attached demo 组件 初始化")
    },
    moved:function(){

    },
    detached:function(){

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    count:5544
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countplus(e){
      this.setData({
        count:this.data.count-=e.target.dataset.id
      })
    },
    changeparent(){
      var myEventDetail = {n:500};
      var myEventOption = {};
      this.triggerEvent("changenumber",myEventDetail)
    }
  }
})
