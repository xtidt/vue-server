<template>
  <div>
    <h4>使用 $http post 请求</h4>
    <div><el-input v-model="item.customerId" disabled></el-input></div>
    <div><el-input v-model="item.companyName" placeholder="companyName"></el-input></div><br>
    <div><el-input v-model="item.contactName" placeholder="contactName"></el-input></div><br>
    <div><el-input v-model="item.phone" placeholder="phone"></el-input></div><br>
    <div><el-button @click="postRequest">post requese</el-button></div>
    <hr>
    <a href="http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/http-post.html">示例</a>
    <p>http://211.149.193.19:8080/api/customers</p>
  </div>
</template>


<script>
export default {
	data () {
		return {
		  msg: 'Want something new?',
		  item: {}
		}
	},
	methods: {
	    postRequest () {
	    	console.log(this.item);
	    	var postData = {
	    		companyName: 1,
	    		contactName: 2, 
	    		phone: 3
	    	};
	    	this.$http.post('/api/api/customers', JSON.stringify(this.item)).then(function(response) {
	        	// 这里是处理正确的回调
		        console.info(response);
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
	    }
	}
}
</script>