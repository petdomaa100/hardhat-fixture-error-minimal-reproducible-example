import { loadBaseTokenFixture as _loadBaseTokenFixture, loadMintTokenFixture as _loadMintTokenFixture } from './fixtures';

function testMinting(whichOne: 'ONE' | 'TWO') {
	/**
	 * Ensures that `loadFixture` treats the fixture as a new instance each time this function is ran.
	 * This IIFE generates a unique reference, preventing memoization from reusing a previously saved
	 * fixture from another time this function was ran with different parameters.
	 */
	const loadBaseTokenFixture = function() {
		return _loadBaseTokenFixture.bind(null, whichOne);
	}();

	// Same reason here.
	const loadMintTokenFixture = function() {
		return _loadMintTokenFixture.bind(null, whichOne);
	}();

	// ==========

	it('Test 1', async () => {
		const {
			contracts: { Token }
		} = await loadBaseTokenFixture();

		// [...] Some test
	});

	it('Test 2', async () => {
		const {
			contracts: { Token }
		} = await loadMintTokenFixture();

		// [...] Some test
	});

	it('Test 3', async () => {
		const {
			contracts: { Token }
		} = await loadBaseTokenFixture();

		// [...] Some test
	});

	it('Test 4', async () => {
		const {
			contracts: { Token }
		} = await loadMintTokenFixture();

		// [...] Some test
	});

	it('Test 5', async () => {
		const {
			contracts: { Token }
		} = await loadBaseTokenFixture();

		// [...] Some test
	});

	it('Test 6', async () => {
		const {
			contracts: { Token }
		} = await loadMintTokenFixture();

		// [...] Some test
	});
}

([ 'ONE', 'TWO' ] as const).forEach(whichOne => {
	describe(`${whichOne}: Minting`, () => {
		testMinting(whichOne);
	});

	// [...] Testing other parts of the shared interface
});
