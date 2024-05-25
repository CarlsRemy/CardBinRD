// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { searchByIssuer } = require('../src/cardBinRD');

describe('searchByIssuer', () => {
	it(`debería devolver "QIK Banco Digital"`, () => {
		let BIN =  searchByIssuer("QIK Banco Digital");

		expect(BIN).to.be.an('array').that.has.lengthOf(2)
		expect(BIN).to.deep.equal([  
			{
    BIN: '539416',
    cardType: 'credit',
    cardLevel: 'GOLD',
    provider: 'MasterCard'
  },
  {
    BIN: '492197',
    cardType: 'DEBIT',
    cardLevel: 'CLASSIC',
    provider: 'Visa'
  }
]);

	});
});