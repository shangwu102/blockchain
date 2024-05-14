import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
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
    address1:"0x1C7F0bb4e77F62b4996898D549Cc105782BF72Cf",
    address2: "0xFf55C4CD9BF02D6A3ce70Ee525ed0b30BbA968C2",
    address3:"0x135B09c6515e7e447285cC4CD57B1B0debB9046A",
    address4:"0x2B0C18a10241434883bC290c1818a84fc4b6F852"
  },
  mutations:{

  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
})
export default store