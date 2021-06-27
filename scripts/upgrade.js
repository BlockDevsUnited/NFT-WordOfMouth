// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const WOMV2 = await ethers.getContractFactory("WordOfMouthV2");
  console.log("Upgrading WOM...");
  const womV2 = await upgrades.upgradeProxy("", WOMV2);
  console.log("WOM upgraded");
}

main();
