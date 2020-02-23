// components/my-table/table.js
Component({
  /**
   * 组件的属性列表
   * 向组件传递数据
   */
  properties: {
    titles:{
      type: Array,
      value: [1,2,3]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      var index = event.currentTarget.dataset.index
      this.setData({
        curIndex: index
      })
      this.triggerEvent('itemclick', {index, title: this.properties.titles[index]}, {})
    }
  }
})
