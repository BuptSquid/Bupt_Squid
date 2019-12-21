//location.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    point:{
      latitude: 40.1570652705,
      longitude: 116.2886524200
    },
    markers: []
  },
  onLoad: function() {
    console.log( '欢迎来到北京邮电大学沙河码农基地' )
    var that = this;
    wx.getLocation( {
      type: 'wgs84',
      success: function( res ) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        var point={
             latitude: latitude,
             longitude: longitude
        }
        var markers = [ {
          latitude: latitude,
          longitude: longitude,
          name: '地图定位',
          desc: '我现在的位置'
        }];
        that.setData( markers );
         that.setData( point );
      }
    })
  }
})
