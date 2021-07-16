// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const WOMV2 = await ethers.getContractFactory("WordOfMouthV2");
  console.log("Upgrading WOM...");

  // paste the V1 address into the ""
  const womV2 = await upgrades.upgradeProxy("0x68495C407e9b51eacEb9914d3AbAd4543F52d9F1", WOMV2);
  console.log("WOM upgraded");
}

main();
