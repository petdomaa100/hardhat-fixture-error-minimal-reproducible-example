import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { baseTokenFixture as _baseTokenFixture, mintTokenFixture as _mintTokenFixture } from './fixtures';

function testMinting(whichOne: 'ONE' | 'TWO') {
	/**
	 * Ensures that `loadFixture` treats the fixture as a new instance each time this function is ran.
	 * This IIFE generates a unique reference, preventing memoization from reusing a previously saved
	 * fixture from another time this function was ran with different parameters.
	 */
	const baseTokenFixture = function() {
		return _baseTokenFixture.bind(null, whichOne);
	}();

	// Same reason here.
	const mintTokenFixture = function() {
		return _mintTokenFixture.bind(null, whichOne);
	}();

	// ==========

	it('Test 1', async () => {
		const {
			contracts: { Token }
		} = await loadFixture(baseTokenFixture);

		// [...] Some test
	});

	it('Test 2', async () => {
		const {
			contracts: { Token }
		} = await loadFixture(mintTokenFixture);

		// [...] Some test
	});

	it('Test 3', async () => {
		const {
			contracts: { Token }
		} = await loadFixture(baseTokenFixture);

		// [...] Some test
	});

	it('Test 4', async () => {
		const {
			contracts: { Token }
		} = await loadFixture(mintTokenFixture);

		// [...] Some test
	});

	it('Test 5', async () => {
		const {
			contracts: { Token }
		} = await loadFixture(baseTokenFixture);

		// [...] Some test
	});

	it('Test 6', async () => {
		const {
			contracts: { Token }
		} = await loadFixture(mintTokenFixture);

		// [...] Some test
	});
}

([ 'ONE', 'TWO' ] as const).forEach(whichOne => {
	describe(`${whichOne}: Minting`, () => {
		testMinting(whichOne);
	});

	// [...] Testing other parts of the shared interface
});
