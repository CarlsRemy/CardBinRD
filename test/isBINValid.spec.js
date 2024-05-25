// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { isBINValid } = require('../src/cardBinRD');

describe('isBINValid', () => {
	["400193", "400194", "402108","401172", "407978", "413766", "420462", "421805", "492197", "539416"].forEach(BIN => {
		it(`debería devolver true al BIN ${BIN}`, () => {
			let isBIN =  isBINValid(BIN);
			assert.strictEqual(isBIN, true);
		});
	});
});