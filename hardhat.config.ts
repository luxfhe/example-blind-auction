// Plugins
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "@luxfhe/hardhat-plugin";
import "@luxfhe/hardhat-network";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

// Tasks
import "./tasks";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.31",
    settings: {
      evmVersion: "cancun",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  // Optional: defaultNetwork is already being set to "localluxfhe" by @luxfhe/hardhat-plugin
  defaultNetwork: "localluxfhe",
};

export default config;
