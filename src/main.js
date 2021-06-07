import { createApp } from 'vue'
import App from './App.vue'
const VueRouter = require('vue-router')

// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = {
//     template: require("@/components/index-left-window.vue")
// }
import Index from "@/components/index.vue"
import CST_vue2matlab from "@/pages/CST/vba2matlab/vba2matlab.vue"
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [{
        path: '',
        name: 'index',
        component: Index,
    },
    {
        path: '/CST/vba2matlab',
        name: 'cst_vue2matlab',
        component: CST_vue2matlab,
    }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App);
app.use(router);
app.mount('#app');
