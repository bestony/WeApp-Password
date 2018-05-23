// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onSubmit:(res)=>{
    console.log(res.detail.value);
    // todo: 发送提交请求，并根据返回值提示用户。
  }
})