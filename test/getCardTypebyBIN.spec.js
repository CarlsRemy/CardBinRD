// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { getCardTypebyBIN } = require('../src/cardBinRD');

describe('getCardTypebyBIN', () => {
	["400193", "400194", "402108"].forEach(BIN => {
		it(`debería devolver "CREDIT" al BIN ${BIN}`, () => {
			let cardType =  getCardTypebyBIN(BIN);

			assert.strictEqual(cardType, "CREDIT");
		});
	});

	["546464", "544519", "540666"].forEach(BIN => {
		it(`debería devolver "DEBIT" al BIN ${BIN}`, () => {
			let cardType =  getCardTypebyBIN(BIN);

			assert.strictEqual(cardType, "DEBIT");
		});
	});
});