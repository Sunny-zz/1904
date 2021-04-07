//Page Object
// 导入百度地图模块
const bmap = require('../../libs/bmap-wx.min.js');
Page({
  data: {
    address: [],
    weatherData: ''
  },
  //options(Object)
  onLoad: function (options) {
    // 获取当前的天气信息
    
    // 想要使用 getLocation 获取用户地理位置需要在 app.json 添加权限受理
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy: true,
      success: res => {
        // 精度
        const longitude = res.longitude
        // 纬度
        const latitude = res.latitude
        // 需要使用第三方工具将经纬度转化成地址
        // 逆地址解析
        // console.log(longitude, latitude)

        this.getLocationWeather()

        // 需要使用请求 百度的 wep 服务 api 中正逆地址解析 
        // http://api.map.baidu.com/reverse_geocoding/v3/?ak=您的ak&output=json&coordtype=wgs84ll&location=31.225696563611,121.49884033194
        wx.request({
          url: `https://api.map.baidu.com/reverse_geocoding/v3/?ak=H28AWfM1lGvSmgjXWkWGrKI0GOniob3o&output=json&coordtype=wgs84ll&location=${latitude},${longitude}`,
          success: (res) => {
            // console.log(res.data)
            const { addressComponent } = res.data.result
            this.setData({
              address: [
                addressComponent.province,
                addressComponent.city,
                addressComponent.district
              ]
            })
          }
        })
      }
    })
  },
  // 获取当前定位位置的天气信息
  getLocationWeather() {
    const that = this;
    console.log(111)
    // 新建百度地图对象 
    const BMap = new bmap.BMapWX({
      ak: 'H28AWfM1lGvSmgjXWkWGrKI0GOniob3o'
    });
    // 获取失败的函数
    const fail = function (data) {
      console.log(data)
    };
    // 获取成功的函数
    const success = function (data) {
      console.log(data)
      let weatherData = data.currentWeather[0];
      // data 的 currentWeather 里面就会有当前位置的天气信息
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      // 可以接受三个参数 第三个参数是地理位置 location 也就是位置的经纬度
      fail: fail,
      success: success
    });
  },
  // picker 切换地区的事件
  bindRegionChange(e) {
    // console.log(e)
    this.setData({
      address: e.detail.value
    })
  }
  // onReady: function(){

  // },
  // onShow: function(){

  // },
  // onHide: function(){

  // },
  // onUnload: function(){

  // },
  // onPullDownRefresh: function(){

  // },
  // onReachBottom: function(){

  // },
  // onShareAppMessage: function(){

  // },
  // onPageScroll: function(){

  // },
  // //item(index,pagePath,text)
  // onTabItemTap:function(item){

  // }
});