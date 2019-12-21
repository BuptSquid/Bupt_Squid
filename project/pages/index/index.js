const app = getApp()
Page({
  data: {
   ctype:'line',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    log:0,
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
    items: [
      { name: 'up', value: '高于门限报警', checked: 'ture' },
      { name: 'down', value: '低于门限报警' },
    ]
  },

  baiduweather:function()
{


  
    var theBaiDuAPPkey = "BVe28lbxSK6GyasbeeQnQn9XuwXNDT0D" //百度的AK, 此处要替换为你自己的APPKey

wx.request({
  url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=' + theBaiDuAPPkey, //百度天气API




  success: (res) => {
    console.log(res)
    console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)
    // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
    try {
      var str = res.data.results[0].weather_data[0].date;
      var tmp1 = str.match(/实时.+/);
      var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
      var tmp = +tmp2;
    } catch (e) {
      throw new Error(e)
    }
wx.showModal({
          title: '提示～',
          content: `当前温度${tmp}度`,
cancelText: "返回",
  cancelColor: "#000",
  confirmText: "更多",
  confirmColor: "#0f0",

  success: function (res){
    if (res.confirm) {
      //console.log('hi')
      wx.navigateTo({
        url: '../baidutianqi/baidutianqi',
      })
    }
  }
        })
    
  },

  fail: function (res) {
    console.log("请求失败", res)
  }


})

},
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    var that=this
    console.log(e.detail.userInfo.nickName)
    if (e.detail.userInfo.nickName == "浅唱、年华" || e.detail.userInfo.nickName == "Elegy" || e.detail.userInfo.nickName == "   旭")//输入你想允许的名字
    {
      app.globalData.log=1
      //console.log(app.globalData.log )
      that.data.log = 1
    }
    else{
      app.globalData.log = 2
      that.data.log = 2
    }
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindViewTap: function () {
    console.log('hi')
  },

  
    //wx.switchTab({
      //url: '../hi/hi',
      //success: function (res) { },
      //fail: function (res) { },
      //complete: function (res) { },
   // })
  
  
  collum: function () {



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



    var app = getApp()
    app.globalData.ctype = 'column'
    //console.log('hihih')
    this.setData({
      ctype: app.globalData.ctype
    })
  },
  line: function () {



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



    var app = getApp()
    app.globalData.ctype = 'line'
    this.setData({
      ctype: app.globalData.ctype
    })
  },
  area: function () {



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



    var app = getApp()
    app.globalData.ctype = 'area'
    this.setData({
      ctype: app.globalData.ctype
    })
  },


  getinfor: function () {
    var log = this.data.log
    if (log == 0) {
      wx.showModal({
        title: '拒绝访问',
        content: `请先登录指定的账号`,
        showCancel: false,
        confirmText: "确定",
        confirmColor: "#0f0",})
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
    wx.navigateTo({
      url: '../imfor1/infor1',
    })

 

  },
  map: function () {
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
    wx.navigateTo({
      url: '../location/location',
    })
  }
})



