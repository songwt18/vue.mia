import Vue from 'vue';
import Router from 'vue-router'

const Home = () => import('../views/home/Home');
const Categories = () => import('../views/categories/Categories');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');

Vue.use(Router);

const routes = [
    {path:'',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/categories',component:Categories},
    {path:'/cart',component:Cart},
    {path:'/profile',component:Profile}
]
    

export default new Router({
    routes,
    mode:'history'
})