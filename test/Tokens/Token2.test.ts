import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { deployFixture } from '../base-fixture';

describe('Token2', () => {
	it('Test 1', async () => {
		const {
			contracts: { Token2 }
		} = await loadFixture(deployFixture);

		// [...] Some test unique to Token2
	});
});