
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
  },
  enableDebug:(res)=>{
    wx.setEnableDebug({
      enableDebug: true,
      success:(res)=>{
        wx.showToast({
          title: '打开成功'
        })
      }
    })
  },
  disableDebug:(res)=>{
    wx.setEnableDebug({
      enableDebug: false,
      success:(res)=>{
      }
    })
  }
})