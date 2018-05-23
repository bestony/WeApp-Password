
Page({
  onShareAppMessage: function () {
  
  },
  copyGithub:(res)=>{
    wx.setClipboardData({
      data: 'https://github.com/LCTT/WeApp-Password',
      success:()=>{
      },
      fail:()=>{
        
      }
    })
  },
  copyHome:(res)=>{
    wx.setClipboardData({
      data: 'https://otpcloud.linux.cn',
      success: () => {
      },
      fail: () => {

      }
    })
  }
})