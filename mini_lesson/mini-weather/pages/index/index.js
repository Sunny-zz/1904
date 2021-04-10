//Page Object
const moment = require('../../libs/moment-with-locales.min')
moment.locale('zh-cn')
Page({
  data: {
    address: [],
    weatherData: null
  },
  //options(Object)
  onLoad: function (options) {
    // 获取当前的天气信息
    // 想要使用 getLocation 获取用户地理位置需要在 app.json 添加权限受理
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy: true,
      success: res => {
        // 经度 制作成全局变量 给下拉事件使用
        this.longitude = res.longitude
        // 纬度 制作成全局变量
        this.latitude = res.latitude
        // 需要使用第三方工具将经纬度转化成地址
        // 逆地址解析
        // console.log(longitude, latitude)
        // 根据经纬度获取和风天气信息
        this.getLocationWeather(this.longitude, this.latitude)

        // 需要使用请求 百度的 wep 服务 api 中正逆地址解析 
        // http://api.map.baidu.com/reverse_geocoding/v3/?ak=您的ak&output=json&coordtype=wgs84ll&location=31.225696563611,121.49884033194
        wx.request({
          url: `https://api.map.baidu.com/reverse_geocoding/v3/?ak=H28AWfM1lGvSmgjXWkWGrKI0GOniob3o&output=json&coordtype=wgs84ll&location=${this.latitude},${this.longitude}`,
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
  // 根据位置获取对应的现在的天气信息
  getLocationWeather(longitude, latitude, callBack) {
    wx.request({
      url: `https://devapi.qweather.com/v7/weather/now?key=c1bf83f34d1b42b0a764cb26f453a286&location=${longitude},${latitude}`,
      method: 'GET',
      success: weather => {
        // console.log(weather)
        wx.request({
          url: `https://devapi.qweather.com/v7/indices/1d?key=c1bf83f34d1b42b0a764cb26f453a286&location=${longitude},${latitude}&type=10`,
          success: res => {
            // console.log(res)
            this.setData({
              weatherData: {
                now_temp: weather.data.now.temp,
                now_text: weather.data.now.text,
                daily_text: res.data.daily[0].category,
                update_time: moment(weather.data.updateTime).fromNow()
              }
            }, () => {
              // 请求天气成功之后做的事
              // console.log('天气更新成功')
              callBack && callBack()
            })
          }
        })
      }
    })
  },
  // picker 切换地区的事件
  bindRegionChange(e) {
    // console.log(e)
    this.setData({
      address: e.detail.value
    }, () => {
      // 还需要请求对应位置的天气， 就需要使用百度的正地址解析降低至解析成经纬度，然后获取和风天气的信息
      // http://api.map.baidu.com/geocoding/v3/?address=北京市海淀区上地十街10号&output=json&ak=您的ak //GET请求
      wx.request({
        url: `https://api.map.baidu.com/geocoding/v3/?address=${this.data.address.join('')}&ak=H28AWfM1lGvSmgjXWkWGrKI0GOniob3o&output=json`,
        success: (res) => {
          const { lng, lat } = res.data.result.location
          this.longitude = lng
          this.latitude = lat
          this.getLocationWeather(lng, lat)
        }
      })
    })
  },
  // onReady: function(){

  // },
  // onShow: function(){

  // },
  // onHide: function(){

  // },
  // onUnload: function(){

  // },
  onPullDownRefresh: function () {
    // console.log('下拉了')
    this.getLocationWeather(this.longitude, this.latitude, () => {
      wx.stopPullDownRefresh()
    })
  },
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