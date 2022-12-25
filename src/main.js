import Vue from 'vue'
import App from './App.vue'

import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';

import router from  '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'


Vue.config.productionTip = false



Vue.prototype.$http=http

router.beforeEach((to,form,next)=>{
    store.commit('getToken')
    const token = store.state.user.token
    if(!token && to.name !== 'login'){
        next({name: 'login'})
    }else if(token && to.name === 'login'){
        next({name: 'home'})
    }else{
        next()
    }
})

new Vue({
    router,
    store,
    render:h=>h(App),
    created() {
        store.commit('addMenu',router)
    },
}).$mount('#app')

