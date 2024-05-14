<template>
  <div>
    <button @click="fun">按钮</button>
  </div>
</template>
<script>
import Web3 from 'web3'
export default {
  name: 'App',
  methods:{
    fun() {
      const web3 = new Web3(Web3.givenProvider)
      console.log(web3);
      console.log(Web3.version);
      console.log(Web3.modules);
      console.log(Web3.utils);
    }
  }
}
      
</script>
<style scoped>

</style>