// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { getCardDetails } = require('../src/cardBinRD');

describe('getCardDetails', () => {

	it(`debería devolver los Datos de "Banco Caribe"`, () => {
		let cardNumber =  getCardDetails("400193");
		expect(cardNumber).to.deep.equal({
			"issuer": "Banco Caribe",
			"cardType": "CREDIT",
			"cardLevel": "CLASSIC",
			"provider": "Visa"
		});
	});


	it(`debería devolver los Datos de "BankReservas"`, () => {
		let cardNumber =  getCardDetails("401172");
		expect(cardNumber).to.deep.equal({
			"issuer": "BankReservas",
			"cardType": "CREDIT",
			"cardLevel": "CLASSIC",
			"provider": "Visa"
		});
	});

	it(`debería devolver los Datos de "Popular"`, () => {
		let cardNumber =  getCardDetails("554938");
		expect(cardNumber).to.deep.equal({
			"issuer": "Popular",
			"cardType": "CREDIT",
			"cardLevel": "STANDARD",
			"provider": "MasterCard"
		},);
	});
});