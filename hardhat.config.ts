import 'hardhat-typechain'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

require('dotenv').config()

const ACCOUNTS = [
  process.env.DEPLOYER_WALLET,
  process.env.FEE_SETTER_WALLET,
].filter(Boolean);

export default {
  namedAccounts: {
    deployer: {
      default: 0,
    },
    feeSetter: {
      default: 1,
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      gasLimit:1000000,
    },
    localhost: {
      url: 'http://127.0.0.1:9652/ext/bc/C/rpc',
      accounts: ACCOUNTS,
    },
  },
  etherscan: {
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  deterministicDeployment:{
    "502": { 
      factory: '0x21a7f006ae01b612bbe1d9e3f18ab25d940b2dbc',
    }
  },
}
