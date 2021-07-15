const { expect } = require('chai');
 
let WordOfMouth;
let WordOfMouthV2;
let wom;
let womv2;

describe('Upgrade Tests', function () {

  beforeEach(async function() {
      WordOfMouth = await ethers.getContractFactory('WordOfMouth');
      wom = await upgrades.deployProxy(WordOfMouth,{initializer:"initialize"});
      WordOfMouthV2 = await ethers.getContractFactory('WordOfMouthV2');
    });

  it('deploys the V1', async function () {
    wom = await upgrades.deployProxy(WordOfMouth);
    console.log("WOM deployed to:", wom.address);
    expect(await wom.name() === 'Word of Mouth');
  });
  
  it('deploys the V2', async function () {
    womv2 = await upgrades.upgradeProxy(wom.address, WordOfMouthV2);
    console.log("WOM V2 deployed to:", womv2.address);
    expect(await womv2.versionCheck() === 'WordOfMouthV2');
});

});
