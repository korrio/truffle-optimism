var DoppleToken = artifacts.require("DoppleToken");

module.exports = function(deployer) {
  deployer.deploy(DoppleToken,123456,223456, { gasPrice: 15000000 });
};
