import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', redirect: { name: 'blogs', params: { tags: 'Startseite' } } },
    {
        path: '/EhemaligeLeiter',
        name: 'ehemaligeLeiter',
        component: () => import(/* webpackChunkName: "blogs" */ '../areas/blogs/views/EhemaligeLeiter.vue')
    },
    {
        path: '/Leiter',
        name: 'leiter',
        component: () => import(/* webpackChunkName: "blogs" */ '../areas/blogs/views/Leiter.vue')
    },
    {
        path: '/:tags',
        name: 'blogs',
        // route level code-splitting
        // this generates a separate chunk (blogs.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "blogs" */ '../areas/blogs/views/Blogs.vue'),
        props: (route: Route) => ({ tags: route.params.tags })
    },
    {
        path: '/gallery/:composition/:event',
        name: 'gallery-single-event',
        component: () => import(/* webpackChunkName: "gallery" */ '../areas/gallery/views/SingleEvent.vue'),
        props: (route: Route) => ({ composition: route.params.composition, event: route.params.event })
    },
    {
        path: '/gallery/:composition',
        name: 'gallery',
        // route level code-splitting
        // this generates a separate chunk (gallery.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "gallery" */ '../areas/gallery/views/Gallery.vue'),
        props: (route: Route) => ({ composition: route.params.composition })
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;
