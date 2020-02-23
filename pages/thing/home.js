// pages/thing/home.js
Page({

  data: {
    titles:['衣服','裤子','短裤']
  },

  handClick() {
    console.log("click点击了")
  },
  handleStart() {
    console.log("Start点击了")
  },
  handleMove() {
    console.log("Move点击了")
  },
  handleEnd() {
    console.log("End点击了")
  },
  handleTap() {
    console.log("tap点击了")
  },
  handleLongPress() {
    console.log("LongPress点击了")
  },

  handleObject(event) {
    console.log(event)
  },

  handleTouchend(event) {
    console.log("---",event)
  },

  handleItem(event) {
    var index = event.currentTarget.dataset.index;
    var item = event.currentTarget.dataset.item;
    console.log(event);
    console.log(index, item);
  },

  handleCaptureView1() {
    console.log("handleCaptureView1")
  },
  handleView1(){
    console.log("handleView1")
  },
  handleCaptureView2() {
    console.log("handleCaptureView2")
  },
  handleView2(){
    console.log("handleView2")
  },
  handleCaptureView3() {
    console.log("handleCaptureView3")
  },
  handleView3(){
    console.log("handleView3")
  },

})