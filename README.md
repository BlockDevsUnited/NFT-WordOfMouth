# NFT-WordOfMouth

This is the NFT base contract for Word Of Mouth. It is based on ERC1155 Upgradable Smart contract.

<br>

## Steps To Run and deploy the contract

Clone the Repo

```
git clone https://github.com/BlockDevsUnited/NFT-WordOfMouth
```

cd Into the directory
```
cd NFT-WordOfMouth
```

Install the project
```
npm install
```

## Compile the contract

To compile the contract, just go

```
npx hardhat compile
```

If you get any error while compiling like, hardhat not installed locally, then use
```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```
OR
```
npm install @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```
<br>

## Test the contract

In a new terminal start a local node using:

```
npx hardhat node
```

To test the contract:

```
npx hardhat test --network localhost
```

## Configuring Deployment

Now to deploy the NFT contract on the Rinkeby Testnet.

First, make sure you get some rinkeby testnet Ether.  You can get some here: https://faucet.rinkeby.io/

Next, set up a rinkeby provider. You can get one from https://alchemyapi.io or from https://infura.io/

It should look like: https://eth-rinkeby.alchemyapi.io/v2/......

Next, configure **module.exports** in *hardhat.config.js*

```
defaultNetwork: "ropsten",
networks: {
  hardhat: {
  },
  rinkeby: {
    url: "",
    accounts: [""]
  }
},
solidity: {
  version: "0.8.0"
},
paths: {
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts"
},
mocha: {
  timeout: 20000
}
```

You must add your own account private key and provider url to the config
<br>

## Deploy Contract

First, you must write a deploy script. Go to *scripts/deploy.js* in the scripts folder.

If everything is configured properly, you can now deploy. In your terminal, run the deploy command

```
npx hardhat run --network rinkeby scripts/deploy.js
```

Now copy and paste the V1 address into the `" "` of *upgrades.upgradeProxy()* in [upgrade.js](https://github.com/BlockDevsUnited/NFT-WordOfMouth/blob/main/scripts/upgrade.js)

```
npx hardhat run --network rinkeby scripts/upgrade.js
```

To see if your contract has been deployed, check your account in etherscan.io.

A new transaction should appear, and the transaction should deploy a new contract!
<br>

## Verify on Etherscan

To verify your contract on etherscan, you must first flatten your entire contract.

```
npx hardhat flatten > flattenedContracts/flattenedNFTbase.sol
```

Take the code, and clean it up, then verify it on etherscan.
<br>

For cleaning delete all the multiple instances of *SPDX-License-Identifier* and *pragma solidity*.
<br>

## Troubleshooting

If while upgrading you get any kind of error, then just remove the `.openzeppelin` folder and again repeat the both deploy and upgrade steps.
