<template>
  <div class="hello">
    <h1>我是hello world组件的{{ count }}</h1>
    <ul>
      <li v-for="(list,i) in lists" :key="list.id">
        {{list.id}}===={{list.msg}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    count(){
      return this.$store.state.count
    },
    lists(){
      return this.$store.getters.lists
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
