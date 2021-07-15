// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const WOMV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading WOM...");
  const womV2 = await upgrades.upgradeProxy("0x01a5E13d2f80B3D09efbae8dD39Fa1a3190Bc0c2", WOMV2);
  console.log("WOM upgraded");
}

main();
