import Vue from 'vue'
import moment from 'moment'
Vue.filter('formatTime', function (value, a, b) {
  console.log(a);
  console.log(b);

  if (!value) return ''
  return moment(value).format('MM-DD HH:mm')
})