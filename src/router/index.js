import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      name: 'Index',
      component:()=>import(/* webpackChunkName: "Index" */ '@/views/Index'),
      children:[
          {
              path: '/login',
              name: 'Login',
              component:()=>import(/* webpackChunkName: "Login" */ '@/views/Login')
          },
          {
              path:'/agreement',
              name:'Agreement',
              component:()=>import(/* webpackChunkName: "Agreement" */ "@/views/Agreement")

          },
          {
              path:'/pact',
              name:'Pact',
              component:()=>import(/* webpackChunkName: "Pact" */ "@/views/Pact")
          },
          {
              path:'/wangji',
              name:'Wangji',
              component:()=>import(/* webpackChunkName: "Wangji" */ "@/views/Wangji")
          },
          {
              path:'/complete',
              name:'Complete',
              component:()=>import(/* webpackChunkName: "Complete" */ "@/views/Complete")
          },
          {
              path:'/nickname',
              name:'Nickname',
              component:()=>import(/* webpackChunkName: "Nickname" */ "@/views/Nickname")
          },
          {
              path:'/upload',
              name:'Upload',
              component:()=>import(/* webpackChunkName: "Upload" */ "@/views/Upload")
          },
          {
              path:'/gender',
              name:'Gender',
              component:()=>import(/* webpackChunkName: "Gender" */ "@/views/Gender")
          },
          {
              path:'/meter',
              name:'Meter',
              component:()=>import(/* webpackChunkName: "Meter" */ "@/views/Meter")
          },
          {
              path:'/weight',
              name:'Weight',
              component:()=>import(/* webpackChunkName: "Weight" */ "@/views/Weight")
          },
          {
              path:'/select',
              name:'Select',
              component:()=>import(/* webpackChunkName: "Select" */ "@/views/Select")
          },
          {
              path:'/loading',
              name:'Loading',
              component:()=>import(/* webpackChunkName: "Loading" */ "@/views/Loading")
          },
          {
              path:'/screen',
              name:'Screen',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Screen")
          },
          {
              path:'/flash',
              name:'Flash',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Flash")
          },
          {
              path:'/shopmall',
              name:'ShopMall',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/ShopMall")
          }
      ]
    }
  ]
})
