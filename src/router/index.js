import Vue from 'vue'

import VueRouter from 'vue-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import KanBanBoard from '../pages/KanBanBoard';
import ListTasks from '../pages/ListTasks';
import CreateTask from '../pages/CreateTask';


Vue.use(VueRouter)

const routes = [
	{ 
		path: '/',
		component: KanBanBoard,
		children: [
			{
				path: '',
				name: 'home-page',
				component: ListTasks
			}, {
				path: 'create',
				name: 'create-task-page',
				component: CreateTask
			}
		]
	}, { 
		path: '/login', 
		name: 'login-page',
		component: Login 
	}, { 
		path: '/register', 
		name: 'register-page',
		component: Register 
	}
]

const router = new VueRouter({
	routes
})
export default router;