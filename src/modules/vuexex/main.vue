<template>
  <div>
    <h4>使用vuex状态管理方法:计数器{{count}}</h4>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>
        <h5>1.主函数中全局注入store状态管理对象</h5>
        <h5>2.分模块管理 modules下 store 模块，可用于大型项目混入</h5>
        <h5>3.子模块只需使用 this.$store 引用，无需 import rootstore对象</h5>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
        return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>


