import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import MyTraining from '@/views/MyTraining'
import Drill from '@/views/Drill'
import Find from '@/views/Find'


import Running from '@/views/Running'
import RunningSetting from '@/views/RunningSetting'
import AllHistory from '@/views/AllHistory'


import DrillRecommend from '@/views/DrillRecommend'
import Plaza from '@/views/Plaza'
import Search from '@/views/Search'
import VideoDrill from '@/views/VideoDrill'
import TrainingPlan from '@/views/TrainingPlan'
import MovementData from '@/views/MovementData'
import MovementList from '@/views/MovementList'
import MovementPart from '@/views/MovementPart'
import AllVideo from '@/views/AllVideo'

import PlazaDetail from '@/views/PlazaDetail'
import PlazaSearch from '@/views/PlazaSearch'
import PlazaIssue from '@/views/PlazaIssue'

import VideoDetail from '@/views/VideoDetail'

import Shopping from '@/views/Shopping'


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
              path:'/sidebar',
              name:'Sidebar',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Sidebar")
          },
          {
              path:'/personaldata',
              name:'PersonalData',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/PersonalData")
          },
          {
              path:'/mymsg',
              name:'MyMsg',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/MyMsg")
          },
          {
              path:'/myorder',
              name:'MyOrder',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/MyOrder")
          },
          {
              path:'/coupon',
              name:"Coupon",
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Coupon")
          },
          {
              path:'/redeemcode',
              name:'RedeemCode',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/RedeemCode")
          },
          {
              path: '/invitation',
              name: 'Invitation',
              component: () => import(/* webpackChunkName: "Screen" */ "@/views/Invitation")
          },
          {
              path:'/invita',
              name:"Invita",
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Invita")
          },
          {
              path:'/bodydata',
              name:'BodyData',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/BodyData")
          },
          {
              path:'/integral',
              name:'Integral',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Integral")
          },
          {
              path:'/collection',
              name:'Collection',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Collection")
          },
          {
              path:'/download',
              name:'Download',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Download")
          },
          {
              path:'/follow',
              name:'Follow',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/Follow")
          },
          {
              path:'/setup',
              name:'SetUp',
              component:()=>import(/* webpackChunkName: "Screen" */ "@/views/SetUp")
          }

      ]

    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      redirect: '/my_training',
      children: [
        {
          path: '/my_training',
          name: 'MyTraining',
          component: MyTraining,
        }
        , {
          path: '/drill',
          name: 'Drill',
          redirect: '/drill_recommend',
          component: Drill,
          children: [
            {
              path: '/drill_recommend',
              name: 'DrillRecommend',
              component: DrillRecommend,
            }
            , {
              path: '/plaza',
              name: 'Plaza',
              component: Plaza,
            }
          ]
        },
        , {
          path: '/find',
          name: 'Find',
          redirect: '/shopping',
          component: Find,
          children: [
            {
              path: '/shopping',
              name: 'Shopping',
              component: Shopping,
            }
          ]
        },
      ]
    },
    {
      path: "/running",
      name: "Running",
      component: Running
    },
    {
      path: "/running_setting",
      name: "RunningSetting",
      component: RunningSetting
    },
    {
      path: "/all_history",
      name: "AllHistory",
      component: AllHistory
    },


    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/video_drill",
      name: "VideoDrill",
      component: VideoDrill
    },
    {
      path: "/training_plan",
      name: "TrainingPlan",
      component: TrainingPlan
    },
    {
      path: "/movement_data",
      redirect: '/movement_list',
      name: "MovementData",
      component: MovementData,
      children: [
        {
          path: "/movement_list",
          name: "MovementList",
          component: MovementList,
        }
        ,
        {
          path: '/movement_part',
          name: 'MovementPart',
          component: MovementPart,
        }
      ]
    },
    {
      path: '/all_video',
      name: AllVideo,
      component: AllVideo
    }
    , {
      path: '/plaza_detail',
      name: PlazaDetail,
      component: PlazaDetail
    }
    , {
      path: '/plaza_search',
      name: PlazaSearch,
      component: PlazaSearch
    }
    , {
      path: '/plaza_issue',
      name: PlazaIssue,
      component: PlazaIssue
    }
    , {
      path: '/video_detail',
      name: VideoDetail,
      component: VideoDetail
    }
  ]
})
