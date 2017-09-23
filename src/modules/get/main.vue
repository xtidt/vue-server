<template>
  <div>
    <h4>使用 $http 请求 JSONP</h4>
    <el-button @click="get">get JSONP</el-button>
    <h4>使用 $http proxy 请求 </h4>
    <el-button @click="getRequest">get requese</el-button>
    <hr>
    <el-table
      :data="content"
      style="width: 100%">
      <el-table-column
        prop="customerId"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contactName"
        label="ContactName">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="phone">
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
	data () {
		return {
		  msg: 'Want something new?',
		  articles: null,
		  content: []
		}
	},
	methods: {
	    get () {
	      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
	          headers: {

	          },
	          emulateJSON: true
	      }).then(function(response) {
	          this.articles = response.data.subjects
	          console.info(this.articles);
	      }, function(response) {
	          console.log(response)
	      });
	    },

	    getRequest () {
	    	this.$http.get('/api/api/customers/').then(function(response) {
	        	// 这里是处理正确的回调
	        	this.content = JSON.parse(response.bodyText);
		        console.info(response.bodyText);
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
	    }
	},

	mounted: function(){
		this.getRequest();
	}
}
</script>