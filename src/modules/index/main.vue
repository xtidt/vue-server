<template>
  <div>
    <h1>调用ele组件</h1>
    <el-button @click.native="startHacking">Yes!</el-button>
  </div>
</template>

<script>
export default {
 methods: {
    startHacking () {
      this.$notify({
        title: 'Shhh',
        message: 'Just be patient...',
        duration: 6000
      })
    }
  }
}
</script>