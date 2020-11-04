<template>
<router-view></router-view>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  export default {
    setup () {
      const state = reactive({
        count: 0,
      })
    const add =()=>{
      state.count ++;
    }
      return {
        ...toRefs(state),
        add
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
