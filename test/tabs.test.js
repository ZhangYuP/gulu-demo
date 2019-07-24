const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-pane', TabsPane);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  // BDD 行为驱动测试 Mocha

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('可以接受 selected prop', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="finance">
        <g-tabs-head>
          <g-tabs-item name="woman"> 美女 </g-tabs-item>
          <g-tabs-item name="finance" > 财经 </g-tabs-item>
          <g-tabs-item name="sports"> 体育 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
          <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
          <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(x.classList.contains('active')).to.eq(true)
    })
  })

  it('可以接受 direction prop', () => {

  })
})
