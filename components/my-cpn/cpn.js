// components/my-cpn/cpn.js
Component({
  properties: {
    // title: String
    title: {
      type: String,
      value: "默认标题",
      observer: function(newVal, oldVal) {
        // console.log(newVal, oldVal)
      },
    }
  },
  // 外界自定义传递样式
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {
    content: "组件内容"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCont() {
      this.triggerEvent("counter", {name: "王明雪", old: 18}, {})
    },
  }
})
