// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { getBIN } = require('../src/cardBinRD');

describe('getBIN', () => {
	it(`debería devolver el BIN`, () => {
		let BIN =  getBIN("12345670-");
		assert.strictEqual(BIN, "123456");
	});
	it(`debería devolver el BIN`, () => {
		let BIN =  getBIN("w12345670-");
		assert.strictEqual(BIN, "123456");
	});

	it(`debería devolver el BIN`, () => {
		let BIN =  getBIN("wdddd12345670-");
		assert.strictEqual(BIN, "123456");
	});
});