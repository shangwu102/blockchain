<template>
  <div>
    <div class="box">
      <div class="block-chain">{{ msg }}</div>
      <button @click="fun">获取链上数据</button>
    </div>
  </div>
</template>


<script>
import Web3 from 'web3'
export default {
  name: 'App',
  data () {
    return {
      msg: '',
      abi: [
        {
          "inputs": [],
          "name": "getName",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      address: "0x572cd64A9E2aEd46D021A546bCA2b4846bc92F06"
    }
  },
  methods: {
    async fun () {
      // console.log(new Web3(Web3.givenProvider));
      const web3 = new Web3('HTTP://127.0.0.1:7545')
      console.log(web3);
      // 通过ABI和地址获取已部署的合约对象
      const contract = new web3.eth.Contract(this.abi, this.address)
      console.log(contract);
      this.msg = await contract.methods.getName().call();
    }
  }
}


</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
}
.block-chain {
  width: 100px;
  height: 20px;
}
.box {
  width: 300px;
  height: 300px;
}


</style>