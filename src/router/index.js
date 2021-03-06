import Vue from 'vue';
import Router from 'vue-router'

const Home = () => import('../views/home/Home');
const Categories = () => import('../views/categories/Categories');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Search = () => import('../views/search/Search');
const SearchResult = () => import('../views/search/components/SearchResult')

Vue.use(Router);

const routes = [
    {path:'',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/categories',component:Categories},
    {path:'/cart',component:Cart},
    {path:'/profile',component:Profile},
    {path:'/search',component:Search},
    {path:'/searchresult',component:SearchResult}
]
   
export default new Router({
    routes,
    mode:'history'
})
