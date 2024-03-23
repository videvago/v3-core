// Helper function
function log_step(step_string) {
    console.log(`\n==> ${step_string}\n`);
}

const func = async function (hre) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = await hre.getChainId();
  log_step(`Hardhat: Deploying to chain ID ${chainId}`);

  //////////////////////////////////////////////////////////////////////////////
  // Deploy FACTORY
  //////////////////////////////////////////////////////////////////////////////

  log_step('Deploying Factory');
  const factoryReceipt = await deploy('UniswapV3Factory', {
    from: deployer,
    args: [deployer],
    log: true,
    deterministicDeployment: true,
  });
  log_step(`Deployed at ${ factoryReceipt.address }`);
}

module.exports = func;
