// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { getCardLevel } = require('../src/cardBinRD');

describe('getCardLevel', () => {
	it(`debería devolver "GOLD"`, () => {
		let cardLevel = getCardLevel("539416");
		assert.strictEqual(cardLevel, "GOLD");
	});

	it(`debería devolver "BLACK"`, () => {
		let cardLevel = getCardLevel("538004");
		assert.strictEqual(cardLevel, "BLACK");
	});

	it(`debería devolver "STANDARD"`, () => {
		let cardLevel = getCardLevel("537971");
		assert.strictEqual(cardLevel, "STANDARD");
	});

	it(`debería devolver "PRIVATE LABEL"`, () => {
		let cardLevel = getCardLevel("537815");
		assert.strictEqual(cardLevel, "PRIVATE LABEL");
	});

	it(`debería devolver "PREPAID"`, () => {
		let cardLevel = getCardLevel("536155");
		assert.strictEqual(cardLevel, "PREPAID");
	});
	
	it(`debería devolver "PLATINUM"`, () => {
		let cardLevel = getCardLevel("534595");
		assert.strictEqual(cardLevel, "PLATINUM");
	});

	it(`debería devolver "CENTRAL TRAVEL SOLUTIONS AIR"`, () => {
		let cardLevel = getCardLevel("531077");
		assert.strictEqual(cardLevel, "CENTRAL TRAVEL SOLUTIONS AIR");
	});
});