// pages/style/wxss.js
Page({
  data: {
    message: 'hello',
    age: 20,
    fname: 'xin',
    lname: 'zhang',
    time: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    movies:['你好','好呀', '很好'],
    nums:
    [
      ['11','12','13'],
      ['21','22','23'],
      ['31','32','33']
    ],
    
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString(),
      })
    }, 1000)
  },

  handSwitch() {
    if (this.data.isActive == false){
      this.setData({
        isActive: true
      })
    } else{
      this.setData({
        isActive: false
      })
    }    
  },

  handShow() {
    if (this.data.isShow == false){
      this.setData({
        isShow: true
      })
    } else{
      this.setData({
        isShow: false
      })
    }
  },

})