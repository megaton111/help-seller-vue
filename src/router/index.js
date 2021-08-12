import Vue from 'vue';
import VueRouter from 'vue-router';
import Unipass from '../views/Unipass';
import Track from '../views/Track';
import KeywordCombi from '../views/KeywordCombi';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/unipass", component: Unipass } ,
    { path: "/track", component: Track } ,
    { path: "/keywordcombi", component: KeywordCombi } ,
  ]
});

export default router; 