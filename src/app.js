import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('r-button', Button);
Vue.component('r-icon', Icon);
Vue.component('r-button-group', ButtonGroup);
Vue.component('r-input', Input);
Vue.component('r-row', Row);
Vue.component('r-col', Col);
Vue.component('r-layout', Layout);
Vue.component('r-header', Header);
Vue.component('r-sider', Sider);
Vue.component('r-content', Content);
Vue.component('r-footer', Footer);
Vue.component('r-toast', Toast);
Vue.use(plugin)
Vue.component('r-tabs', Tabs);
Vue.component('r-tabs-head', TabsHead);
Vue.component('r-tabs-item', TabsItem);
Vue.component('r-tabs-body', TabsBody);
Vue.component('r-tabs-pane', TabsPane);
Vue.component('r-popover', Popover);
Vue.component('r-collapse', Collapse);
Vue.component('r-collapse-item', CollapseItem);

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2','3']
  },
  created () {

  },
  methods: {
    yyy(){
      console.log('yyy');
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast (position){
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback() {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: false
      })
    }
  }
});
