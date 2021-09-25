### Inbox Smart Contract

Smart contract with NodeJs. This project is a test on how to build a simple smart contract for storing a string and reading it. The contract is deployed to rinkeby testnet. Can be found [here](https://rinkeby.etherscan.io/address/0xe6eF96f0318b38Ef6a2Ce212EAD0ef4266931427)

## Configuration

    .
    ├── README.md               # You are here 👇
    ├── compile.js              # Compiler fo code 📦
    ├── contracts               # All smart contracts ( solidity )
    │   └── inbox.sol           # Contract to interact with inbox
    ├── deploy.js               # Take compile code and deploy to network 🚀
    ├── package.json            # Scripts & dependencies 📜
    └── test                    # Test for the contracts
        └── inbox.test.js       # Mocha test 🧪

## Test

The basic flow consist on the compiler taking the contract source code and genereting the bytecode and an ABI ( interface ). The bytecode will be deploy on a local test network using Ganache and the ABI will be feed to Web3 so we have programmatinc access.

To run the test use this command 👇

`npm run test`

## Deploy

To compile and deploy the contract create a `.env` file and fill the url of the api in Infura and your mnemonic from your wallet. Finally use this command 👇

`node deploy.js`
