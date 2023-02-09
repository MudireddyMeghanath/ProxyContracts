// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x434b7Ccc3fa25eeB5887F2331c1f75F1F972f1A3';    // This is the proxy address NOT the admin of the proxy.
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });