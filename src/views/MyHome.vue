<template>
  <div>
    <div class="box">
      <div class="block-chain">{{ msg }}</div><br><br><br>
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
      address: "0xCC859e88AA3F0b7f13fb6e9Fd1acEE1Bf5d468e3"
    }
  },
  methods: {
     async fun () {
      // 连接到以太坊节点
      const web3 = new Web3("https://rpc.sepolia.org");
      // 创建合约实例
      const contract = new web3.eth.Contract(this.abi,this.address)
      console.log(contract);
      // 获取合约数据
      let result = await contract.methods.getName().call();
      this.msg = result
      console.log(result)
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