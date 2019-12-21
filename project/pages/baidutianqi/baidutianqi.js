
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    a:'无',
    tem:"无",
    ntime:'null',
    pm25:0,
    advice:0,
    advice1: 0,

    preview1:0,
    preview2:0,
    zs:0
  },

  radioChange: function (e) {
    //保存报警规则到当前页面的数据
    if (e.detail.value != "") {
      this.setData({
        rule: e.detail.value
      })
    }
    console.log(this.data.rule)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var theBaiDuAPPkey = "BVe28lbxSK6GyasbeeQnQn9XuwXNDT0D" //百度的AK, 此处要替换为你自己的APPKey

    //调用百度天气API
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(res)
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)
        var tmp
        var a
        var ntime
        var pm25
        var  advice
        var advice1

        var  preview1
        var  preview2
        var zs
        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          var str = res.data.results[0].weather_data[0].date;
          var tmp1 = str.match(/实时.+/);
          var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
           tmp = +tmp2;
          a = res.data.results[0].currentCity;
          ntime=res.data.date;
          pm25 = res.data.results[0].pm25;
          preview1 = res.data.results[0].weather_data[1].weather;
          preview2 = res.data.results[0].weather_data[2].weather;
          zs = res.data.results[0].index[0].zs;
          advice = res.data.results[0].index[0].des;
          advice1 = res.data.results[0].index[4].des;

        } catch (e) {
          throw new Error(e)
        }
this.setData({
  tem: tmp,
  a:a,
  ntime:ntime,
  pm25:pm25,
  advice:advice,
  preview1:preview1,
  preview2:preview2,
zs:zs,
advice:advice,
  advice1: advice1

})
        
      },

      fail: function (res) {
        console.log("请求失败", res)
      }
    })
  },

  
})