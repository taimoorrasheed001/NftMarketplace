
const hre = require("hardhat");

async function main() {

  const Lock = await hre.ethers.getContractFactory("Marketplace");
  const lock = await Lock.deploy(2000);

  await lock.deployed();

  console.log(
    ` ${lock} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
