<template>
  <div class="hello">
    <h1>我是hello world组件的{{ count }}</h1>
    <ul>
      <li v-for="(list,index) in lists" :key="list.id">
        {{list.id}}===={{list.msg}}
      </li>
    </ul>
    <h3>{{item}}</h3>
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
    },
    item(){
      return this.$store.getters.item(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
