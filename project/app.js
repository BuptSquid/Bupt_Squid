//app.js
var event = require('lib/event.js');

App({
  onLaunch: function () {
    event(this);
  },
  globalData: {
    log:0,
    ctype:'line',
    temperature: {},
    light: {},
    humidity: {},
    caowen: {},
    test: 0,
    test1: 0,
    test2: 0,
    test_: 0,
    test1_: 0,
    test2_: 0
  }
})