// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { getCardIssuer } = require('../src/cardBinRD');

describe('getCardIssuer', () => {
	["400193", "400194", "402108"].forEach(BIN => {
		it(`debería devolver "Banco Caribe" al BIN ${BIN}`, () => {
			let cardNumber =  getCardIssuer(BIN);
			assert.strictEqual(cardNumber, "Banco Caribe");
		});
	});

	["401172", "407978", "413766", "420462", "421805"].forEach(BIN => {
		it(`debería devolver "BankReservas" al BIN ${BIN}`, () => {
			let cardNumber =  getCardIssuer(BIN);
			assert.strictEqual(cardNumber, "BankReservas");
		});
	});

	["492197", "539416"].forEach(BIN => {
		it(`debería devolver "QIK Banco DIGITAL" al BIN ${BIN}`, () => {
			let cardNumber =  getCardIssuer(BIN);
			assert.strictEqual(cardNumber, "QIK Banco DIGITAL");
		});
	});
});