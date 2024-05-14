<template>
  <div>
    <div class="box">
      <div class="block-chain">
        <div>链上数据：<span>{{ msg }}</span></div>
        <div>部署合约时的区块高度：<span>{{ blockNumber }}</span></div>
        <div>当前区块高度：<span>{{ blockNumberNow }}</span></div>
        <div>部署合约时的时间：<span>{{contractTime}}</span></div>
      </div>
      <button @click="getMsg">获取链上数据</button>
      <button @click="getBlockNumber">获取部署合约时的区块高度</button>
      <button @click="getblockNumberNow">获取当前区块高度</button>
      <button @click="getDeployContractNow">获取部署合约时的时间</button>
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
      contractTime:'', // 部署合约时间
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
        },
        {
          "inputs": [],
          "name": "getTimeStamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      address: "0xFf55C4CD9BF02D6A3ce70Ee525ed0b30BbA968C2"
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
    async getblockNumberNow () {
      // 获取部署合约时的区块高度
      const blockNumber = await this.contract.methods.getBlockNumber().call();
      this.blockNumber = blockNumber
    },
    getBlockNumber() {
      // 获取当前的区块高度
      this.web3.eth.getBlockNumber().then(blockNumber => {
        this.blockNumberNow = blockNumber
        })
    },
    async getDeployContractNow() {
      // 获取的时间戳
      const timestamp = await this.contract.methods.getTimeStamp().call();
      // 创建一个新的 Date 对象，将时间戳作为参数传入
      const date = new Date(String(timestamp) * 1000); // 注意需要乘以1000以将秒转换为毫秒
      // 获取年、月、日、小时、分钟和秒
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要加 1，并确保两位数格式
      const day = String(date.getDate()).padStart(2, '0'); // 日需要确保两位数格式
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      // 拼接成日期时间字符串
      const contractTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      this.contractTime = contractTime

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