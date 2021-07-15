// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const WOM = await ethers.getContractFactory("WordOfMouth");
   const wom = await upgrades.deployProxy(WOM,{initializer:"initialize"});

   await wom.deployed();
   console.log("WOM deployed to:", wom.address);
   const WOMV2 = await ethers.getContractFactory("WordOfMouthV2");
   console.log("Upgrading WOM...");
   const womV2 = await upgrades.upgradeProxy(wom.address, WOMV2);
   console.log("WOM upgraded");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
