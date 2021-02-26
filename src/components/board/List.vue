<template>
	<div>
		<h2>게시판 리스트</h2>
        <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
        <paginated-list :list-array="pageArray" />
	</div>
</template>

<script>
import PaginatedList from './PaginatedList'
export default {
    components: {
        PaginatedList
    },
    data(){
        return {
            pageArray: []
        }
    },
    methods: {
        getList(){
            this.$http.get("http://127.0.0.1:3000/board")
            .then((res)=>{
				console.log(res.data);
                this.pageArray = res.data;
			})
			.then((err)=>{
				console.log(err);
			})
        }
    }
}
</script>

<style scoped>
</style>