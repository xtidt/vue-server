<template>
	<div>
		<h4>使用 $http del request 请求</h4>
		<div><el-input v-model="customerId" placeholder="customerId"></el-input></div>
		<div><el-button @click="delRequest">del requese</el-button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			customerId: null
		}
	},

	methods: {
	    delRequest () {
	    	this.$http.delete('/api/api/customers/'+ this.customerId).then(function(response) {
	        	// 这里是处理正确的回调
		        console.info(response);
				window.location.href = '/getmethod';
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
	    }
	},

	mounted: function() {
		
	}
}
</script>