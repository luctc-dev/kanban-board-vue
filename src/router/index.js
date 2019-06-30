import Vue from 'vue'

import VueRouter from 'vue-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import KanBanBoard from '../pages/KanBanBoard';


Vue.use(VueRouter)

const routes = [
	{ 
		path: '/', 
		component: KanBanBoard 
	}, { 
		path: '/login', 
		component: Login 
	}, { 
		path: '/register', 
		component: Register 
	}
]

const router = new VueRouter({
	routes
})
export default router;