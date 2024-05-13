<template>
  <div>
    <div class="box">
      <div class="block-chain">
        <div>链上数据：<span>{{ msg }}</span></div>
        <div>部署合约时的区块高度：<span>{{ blockNumber }}</span></div>
        <div>当前区块高度：<span>{{ blockNumberNow }}</span></div>
      </div>
      <button @click="getMsg">获取链上数据</button>
      <button @click="getBlockNumber">获取部署合约时的区块高度</button>
      <button @click="getblockNumberNow">获取当前区块高度</button>
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
      blockNumberNow:'',// 当前区块高度
      blockNumber:'', // 部署合约时高度
      abi: [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "getBlockNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
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
      address: "0x9576991040B7b17352bF93b67Aa8e5ca6977474A"
    }
  },
  computed: {
    web3() {
      // 连接到以太坊节点
      return new Web3("https://mainnet.infura.io/v3/a7a1a799a2e94fa4899a1382743c9a34");
      
    },
    contract() {
      // 创建合约实例
      return new this.web3.eth.Contract(this.abi, this.address)
    }
  },
  methods: {
     async getMsg () {
      // 获取合约数据
      const msg = await this.contract.methods.getName().call();
      this.msg = msg
    },
    async getBlockNumber () {
      // 获取部署合约时的区块高度
      const blockNumber = await this.contract.methods.getBlockNumber().call();
      this.blockNumber = blockNumber
    },
    getblockNumberNow () {
      // 获取当前的区块高度
      this.web3.eth.getBlockNumber().then(blockNumber => {
        this.blockNumberNow = blockNumber
        })
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