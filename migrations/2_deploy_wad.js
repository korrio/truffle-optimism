var WardenToken = artifacts.require("WardenToken");

module.exports = function(deployer) {
  deployer.deploy(WardenToken, { gasPrice: 15000000 });
};
