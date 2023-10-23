/*
 * @Author: zd
 * @Date: 2023-10-20 13:44:42
 * @LastEditors: zd
 * @LastEditTime: 2023-10-23 13:58:29
 * @FilePath: \demo-complex-form\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

// 创建vue实力，加载APP组件
const app = new Vue({
    el: '#app',
    render: h => h(App)
})
