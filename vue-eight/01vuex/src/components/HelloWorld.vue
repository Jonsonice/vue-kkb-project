<template>
  <div class="hello">
    <h1>我是hello world组件的{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    count(){
      return this.$store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
