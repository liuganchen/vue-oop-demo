import Vue from "vue";

Vue.directive('track', function (el, binding) {
    // 默认监听
    el.addEventListener('click', ()=>{
        console.log('发生了点击', el);
    })
})
