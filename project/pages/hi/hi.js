// pages/hi/hi.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
log:0
  },

  closemusic: function () {


    var log = this.data.log
    if (log == 0) {
      wx.showModal({
        title: '拒绝访问',
        content: `请先登录指定的账号`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    } if (log == 2) {
      wx.showModal({
        title: '拒绝访问',
        content: `当前账号未授权`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    }


    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'e',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
      
        wx.showModal({
          title: '提示',
          content: `音乐关闭成功`,
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#0f0",
        })
      }, 
      fail: function (res) {
        
        console.log("fail!!!"),

          wx.showModal({
            title: '抱歉',
            content: `音乐关闭失败`,
            showCancel: false,
            confirmText: "确定",
            confirmColor: "#0f0",
          })
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  openmusci_bird: function () {


    var log = this.data.log
    if (log == 0) {
      wx.showModal({
        title: '拒绝访问',
        content: `请先登录指定的账号`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    } if (log == 2) {
      wx.showModal({
        title: '拒绝访问',
        content: `当前账号未授权`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    }


    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'e',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          

        wx.showModal({
          title: '提示',
          content: `音乐开启成功`,
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#0f0",
        })
      },
      fail: function (res) {
        console.log("fail!!!"),
          wx.showModal({
            title: '抱歉',
          content: `音乐开启失败`,
            showCancel: false,
            confirmText: "确定",
            confirmColor: "#0f0",
          })
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  openmusci_bug: function () {



    var log = this.data.log
    if (log == 0) {
      wx.showModal({
        title: '拒绝访问',
        content: `请先登录指定的账号`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    } if (log == 2) {
      wx.showModal({
        title: '拒绝访问',
        content: `当前账号未授权`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    }


    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'e',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
        
        wx.showModal({
          title: '提示',
          content: `音乐开启成功`,
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#0f0",
        })
      },
      fail: function (res) {
        console.log("fail!!!"),
          wx.showModal({
            title: '抱歉',
            content: `音乐开启失败`,
            showCancel: false,
            confirmText: "确定",
            confirmColor: "#0f0",
          })
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  openlight: function () {


    var log = this.data.log
    if (log == 0) {
      wx.showModal({
        title: '拒绝访问',
        content: `请先登录指定的账号`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    } if (log == 2) {
      wx.showModal({
        title: '拒绝访问',
        content: `当前账号未授权`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    }



    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'e',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
        
        wx.showModal({
          title: '提示',
          content: `照明开启成功`,
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#0f0",
        })
      },
      fail: function (res) {
        console.log("fail!!!"),
          wx.showModal({
            title: '抱歉',
            content: `照明开启失败`,
            showCancel: false,
            confirmText: "确定",
            confirmColor: "#0f0",
          })
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  closelight: function () {



    var log = this.data.log
    if (log == 0) {
      wx.showModal({
        title: '拒绝访问',
        content: `请先登录指定的账号`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    } if (log == 2) {
      wx.showModal({
        title: '拒绝访问',
        content: `当前账号未授权`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",
      })
      return
    }



    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'e',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          

        wx.showModal({
          title: '提示',
          content: `照明关闭成功`,
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#0f0",
        })
      },
      fail: function (res) {
        console.log("fail!!!"),
          wx.showModal({
            title: '抱歉',
            content: `照明关闭失败`,
            showCancel: false,
            confirmText: "确定",
            confirmColor: "#0f0",
          })
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //var log=this.data.log
    


    
      },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      log: app.globalData.log
    })
    //console.log(log)
    console.log(app.globalData.log)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})