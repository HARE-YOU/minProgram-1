// pages/home/home.js
Page({

  data: {
    icounter: 0 , 
    counter: 0,
  },
  handleCounter(event) {
    // console.log(event)
    this.setData({
      icounter: this.data.icounter + 1
    })
  },

  handleClick(event) {
    console.log("点击了", event.detail.title)
  },

  handleIncre(event) {
    // 获取组件内data中的的对象counter
    var my_sel = this.selectComponent("#sel-id")
    //直接通过setdata修改组件内的值
    my_sel.setData({
      counter: this.data.counter + 1
    })
    
    //通过方法获取
    my_sel.inCrementCounter(10)
  }



})