import {createRouter, createWebHistory} from 'vue-router';
import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import Write from '@/components/board/Write'; //게시판 리스트 컴포넌트 호출
import View from '@/components/board/View'; //게시판 리스트 컴포넌트 호출

const routerHistory = createWebHistory()

const router = createRouter(({
    history: routerHistory,
    routes:[
		{
			path:'/'
			,component:List
		}
		,{
			path:'/board/list'
			,component:List
		}
        ,{
			path:'/board/write'
			,component:Write
		},
        {
			path:'/board/view'
			,component:View
		}
	]
}))

export default router