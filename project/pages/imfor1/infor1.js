// pages/test/test.js
const devicesId = "575226340" // 填写在OneNet上获得的devicesId 形式就是一串数字 例子:9939133
const devicesId_ = "562094881" // 填写在OneNet上获得的devicesId 形式就是一串数字 例子:9939133

const api_key = "JbY77mKRA4OsIOvVXe5agVoOlpM=" // 填写在OneNet上的 api-key 例子: VeFI0HZ44Qn5dZO14AuLbWSlSlI=
const api_key_ = "XUDvXMj=mKaNWjk=HyRzbzR34uE=" // 填写在OneNet上的 api-key 例子: VeFI0HZ44Qn5dZO14AuLbWSlSlI=

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    timer: '定时',//定时器名字
    countDownNum: '100',//倒计时初始值
    zjhnb: '100'
  },
  back:function()
  {
    wx.switchTab({
      url: '../index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },





totem:function(){
  //console.log('1')
  wx.navigateTo({
    url: "../tem/tianqi",
  })
},

  tolight: function () {
    wx.navigateTo({
      url: "../light/tianqi",
    })
  },
  tohum: function () {
    wx.navigateTo({
      url: "../hum/tianqi",
    })
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    let zjhnb = that.data.zjhnb;//获取倒计时初始值

    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量






        const requestTask = wx.request({
          url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=Light,Temperature,Humidity&limit=20`,
          /**
           * 添加HTTP报文的请求头, 
           * 其中api-key为OneNet的api文档要求我们添加的鉴权秘钥
           * Content-Type的作用是标识请求体的格式, 从api文档中我们读到请求体是json格式的
           * 故content-type属性应设置为application/json
           */
          header: {
            'content-type': 'application/json',
            'api-key': api_key
          },
          success: function (res) {
           // console.log(res.data)
            //拿到数据后保存到全局数据
            var app = getApp()
            app.globalData.temperature = res.data.data.datastreams[0]
            app.globalData.light = res.data.data.datastreams[1]
            app.globalData.caowen = res.data.data.datastreams[2]
            //console.log(app.globalData.light)
            app.globalData.test = app.globalData.temperature.datapoints[0].value
            app.globalData.test1 = app.globalData.light.datapoints[0].value
            app.globalData.test2 = app.globalData.caowen.datapoints[0].value
            var test = app.globalData.test
            that.setData({
              test: test
            })
            var test1 = app.globalData.test1
            that.setData({
              test1: test1
            })
            var test2 = app.globalData.test2
            that.setData({
              test2: test2
            })
            //跳转到天气页面，根据拿到的数据绘图
          },
          fail: function (res) {
            console.log("fail!!!")
          },

          complete: function (res) {
            //console.log("end")
          }
        })

        const requestTask_ = wx.request({
          url: `https://api.heclouds.com/devices/${devicesId_}/datapoints?datastream_id=Light,Temperature,Humidity&limit=20`,
          /**
           * 添加HTTP报文的请求头, 
           * 其中api-key为OneNet的api文档要求我们添加的鉴权秘钥
           * Content-Type的作用是标识请求体的格式, 从api文档中我们读到请求体是json格式的
           * 故content-type属性应设置为application/json
           */
          header: {
            'content-type': 'application/json',
            'api-key': api_key_
          },
          success: function (res) {
            // console.log(res.data)
            //拿到数据后保存到全局数据
            var app = getApp()
            app.globalData.temperature = res.data.data.datastreams[0]
            app.globalData.light = res.data.data.datastreams[1]
            app.globalData.caowen = res.data.data.datastreams[2]
            //console.log(app.globalData.light)
            app.globalData.test_ = app.globalData.temperature.datapoints[0].value
            app.globalData.test1_ = app.globalData.light.datapoints[0].value
            app.globalData.test2_ = app.globalData.caowen.datapoints[0].value
            var test_ = app.globalData.test_
            that.setData({
              test_: test_
            })
            var test1_ = app.globalData.test1_
            that.setData({
              test1_: test1_
            })
            var test2_ = app.globalData.test2_
            that.setData({
              test2_: test2_
            })
            //跳转到天气页面，根据拿到的数据绘图
            //console.log(test_);
          },
          fail: function (res) {
            console.log("fail!!!")
          },

          complete: function (res) {
            //console.log("end")
          }
        })


        countDownNum--;
        that.setData({
          countDownNum: countDownNum
        })

      }, 1000)
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.countDown();
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