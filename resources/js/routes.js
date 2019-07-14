

//componentes
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Error404 from './components/Error404.vue'
import Confi from './components/Confi.vue'


const routes = [
    {
       path: '/',
       name: '/',
       component : Home
   },
   {
        path: '/register',
        name: 'register',
        component : Register,
        meta: {
            auth: false
        }
   },
   {
        path: '/login',
        name: 'login',
        component : Login,
        meta: {
            auth: false
        }
   },
   {
        path: '/dashboard',
        name: 'dashboard',
        component : Dashboard,
        meta: {
            auth: true
        }
   },
   {
    path: '/confi',
    name: 'confi',
    component : Confi,
    meta: {
        auth: true
    }
   },
   {
       path: '*',
       component: Error404
   }
]

export default routes