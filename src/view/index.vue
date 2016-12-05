<template>
<div>
	<v-pagination :page-size='5'
				  :total-result='300'
				  :display-num='6'
				  :edge-num='1'></v-pagination>
	
</div>
</template>
<script>
import vPagination from '../components/vue-pagination'
export default {
	components:{
		vPagination
	}
}
</script>
