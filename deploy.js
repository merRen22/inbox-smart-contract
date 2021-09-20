require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

console.log(process.env.WALLET_MNEMONIC);
const provider = new HDWalletProvider();
