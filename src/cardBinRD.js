const {	bankBIN, 	bankIssuers} = require('./DataBIN.js');

/**
 * @function getBIN
 * @param {string} cardNumber - El número de la tarjeta de crédito
 * @returns {string} BIN/INN - Los primeros 6 dígitos del número de la tarjeta, que corresponden al BIN
 */
function getBIN(cardNumber="") {
	const normalizedBin = cardNumber?.replace(/\D/g,'');
	if (normalizedBin.length < 6) {
		throw new Error("El BIN/IIN debe tener al menos 6 dígitos.");
	}
	return normalizedBin.slice(0, 6);
}
/**
 * @function getCardIssuer
 * @param {string} Bin
 * @returns {string} issuer Devuelve el nombre del banco emisor
 */
function getCardIssuer(Bin) {
	if (Bin.length < 6) {
		return 'unknown';
	}

	const bin = getBIN(Bin);
	return bankBIN[bin]?.issuer || 'unknown';
}
/**
 * @function getCardDetails
 * @param {string} Bin
 * @returns {string} issuer Devuelve objeto con detalles de la tarjeta
 */
function getCardDetails(Bin) {
	let unknown = {	issuer: "unknown", cardType:"",	cardLevel: "",	provider: ""};

	if (Bin.length < 6) {
		return unknown;
	}
	const bin = getBIN(Bin);
	return bankBIN[bin] || unknown;
}
/**
 * @function getCardTypebyBIN
 * @param {string} Bin - El número de la tarjeta de crédito
 * @returns {string} cardType - Los primeros 6 dígitos del número de la tarjeta, que corresponden al BIN
 */
function getCardTypebyBIN(Bin){
	if (Bin.length < 6) {
		return 'unknown';
	}
	const bin =  getBIN(Bin);
	return bankBIN[bin]?.cardType || 'unknown';
}
/**
 * @function getCardLevel
 * @param {string} Bin - El número de la tarjeta de crédito
 * @returns {string} cardLevel - Los primeros 6 dígitos del número de la tarjeta, que corresponden al BIN
 */
function getCardLevel(Bin){
	if (Bin.length < 6) {
		return 'unknown';
	}
	const bin = getBIN(Bin);
	return bankBIN[bin]?.cardLevel || 'unknown';
}

/**
 * @function isBINValid
 * @param {string} Bin - El número de la tarjeta de crédito
 * @returns {string} cardLevel - Los primeros 6 dígitos del número de la tarjeta, que corresponden al BIN
 */
function isBINValid(Bin){
	if (Bin.length < 6) {
		return false;
	}
	const bin = getBIN(Bin);
	return bankBIN[bin] ? true : false;
}
/**
 * @function getAllIssuers
 * @returns {string[]} Issuers - Devuelve un array con todos los emisores de tarjetas
 */
function getAllIssuers(){
	return Object.keys(bankIssuers)
}
/**
 * @function searchByIssuer
 * @param {string} issuer - El nombre del emisor de la tarjeta
 * @returns {string} Issuers - Devuelve un array con todos los BINs asociados a un emisor
 */
function searchByIssuer(issuer){
	return bankIssuers[issuer] || [];
}

module.exports = { 
	getBIN, 
	getCardDetails, 
	getCardIssuer, 
	getCardTypebyBIN, 
	getCardLevel,
	getAllIssuers,
	searchByIssuer,
	isBINValid,
};