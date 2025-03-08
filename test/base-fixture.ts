import { viem } from 'hardhat';
import type { DeployContractConfig } from '@nomicfoundation/hardhat-viem/types';

async function deployFixture() {
	const publicClient = await viem.getPublicClient();
	const [ deployer, { account: user1 } ] = await viem.getWalletClients();

	const deployConfig: DeployContractConfig = {
		walletClient: deployer,
	};

	const Token1 = await viem.deployContract('Token1', [], deployConfig);
	const Token2 = await viem.deployContract('Token2', [], deployConfig);

	// [...] Deploying a bunch of other contracts

	return {
		contracts: { Token1, Token2 },
		wallets: { publicClient, user1 },
	};
}

export { deployFixture };
