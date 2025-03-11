import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { deployFixture } from '../base-fixture';
import type { GetContractReturnType } from '@nomicfoundation/hardhat-viem/types';
import type { ArtifactsMap } from 'hardhat/types/artifacts';

type IShared = GetContractReturnType<ArtifactsMap['IShared']['abi']>;

async function loadBaseTokenFixture(whichOne: 'ONE' | 'TWO') {
	const fixture = await loadFixture(deployFixture);

	const {
		contracts: { Token1, Token2, ...restContracts },
	} = fixture;

	const Token = (whichOne === 'ONE' ? Token1 : Token2) as unknown as IShared;

	return {
		...fixture,
		contracts: { Token, ...restContracts },
	};
}

async function loadMintTokenFixture(whichOne: 'ONE' | 'TWO') {
	const fixture = await loadBaseTokenFixture(whichOne);

	const {
		contracts: { Token },
		wallets: { user1 },
	} = fixture;

	await Token.write.mint([ 1n ], { account: user1 });

	const minterBalance = await Token.read.balanceOf([ user1.address ]);

	return {
		...fixture,
		minting: { minterBalance },
	};
}

export { loadBaseTokenFixture, loadMintTokenFixture };
