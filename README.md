### Inbox Smart Contract

Smart contract with NodeJs
OnGoing Project ⚒

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
