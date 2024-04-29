import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import { Button } from 'vant';
import { Toast,CountDown} from 'vant';
import { Overlay } from 'vant';
import { Icon } from 'vant';

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Toast);
Vue.use(CountDown);
Vue.use(Overlay);
Vue.use(Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
