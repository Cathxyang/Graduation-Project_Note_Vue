import { createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    routes: [
        {
            path: '../components/HelloWorld',
            //路由到的地址(自定义)
            component:()=>import('../components/HelloWorld.vue'),
            //引入组件，组件Home.vue所在路径
            //Home.vue是需要路由的vue组件
            name: 'HelloWorld'
            //组件名称
        },

    ],
    history: createWebHistory()
})
export default router;