<template>
  <div>
    <h4 class="red">加载内联style文件</h4>
    <h4 class="yellow">yellow</h4>
    <hr>
    <h4 class="blue">加载css文件</h4>
  </div>
</template>

<script>
	import './style.less';
</script>

<style lang="less">
#app {
  .red {
    color:red;
  }

  .yellow {
    color:yellow;
  }
}
</style>
