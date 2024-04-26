import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import { Button } from 'vant';
import { Toast } from 'vant';

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Toast);

new Vue({
  render: h => h(App),
}).$mount('#app')
