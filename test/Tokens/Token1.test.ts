import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { deployFixture } from '../base-fixture';

describe('Token1', () => {
	it('Test 1', async () => {
		const {
			contracts: { Token1 }
		} = await loadFixture(deployFixture);

		// [...] Some test unique to Token1
	});
});