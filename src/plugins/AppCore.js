import { EventBus } from './EventBus';
import { SDK } from './SDK';

export default {
  install(Vue) {
    Vue.prototype.$bus = EventBus;
    Vue.prototype.$sdk = SDK;
  }
};
