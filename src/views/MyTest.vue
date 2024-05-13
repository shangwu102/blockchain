<template>
  <div>
    <button @click="fun"></button>
  </div>
</template>
<script>
export default {
  name: 'App',

}
      
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.block-chain {
  width: 400px;
  height: 100px;
  /* background-color: aqua; */
}

.box {
  width: 500px;
  height: 300px;
  /* background-color: blue; */
}

button {
  margin-top: 20%;
}

span {
  color: brown;
  font-weight: bold;
}
</style>