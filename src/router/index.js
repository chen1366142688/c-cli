//router/index.js test.vue异步引入打包之后会生成对应的bundle.js（test.vue）
import {createRouter, createWebHistory} from "vue-router";
import Index from '@/views/index.vue'
import Test from '@/views/test.vue'
const routes = [
	{
		path: '/',
        name: 'Index',
        title: '首页',
        component: Index,
        children: [
            
        ]
	},
	{
		path:'/test',
		name:'Test',
		component:Test
	}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

