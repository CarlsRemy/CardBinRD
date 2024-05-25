# CardBinRD

<p align="center">
  <img src="https://github.com/CarlsRemy/CardBinRD/assets/49526881/4f6bfe15-98cf-404d-b5df-8568042fc3e9" alt="CardBINRD"/>
</p>

CardBinRD es una librería de JavaScript diseñada para gestionar y verificar datos BIN/IIN de tarjetas de crédito emitidas en la República Dominicana. Esta librería proporciona una serie de herramientas y utilidades que permiten a los desarrolladores obtener información detallada sobre las tarjetas de crédito

[![NPM Version](https://img.shields.io/npm/v/CardBinRD.svg)](https://www.npmjs.com/package/CardBinRD)

### ¿Qué es el número BIN?

<div style="display: flex;align-items: flex-start;justify-content: space-between;">
    <div style="flex: 2;">
        <p style="margin: 0;">
				Los números de identificación bancaria también son utilizados por otras instituciones, como American Express. El término "número de identificación del emisor" (IIN) se usa indistintamente con BIN. El sistema de numeración ayuda a identificar el robo de identidad o posibles violaciones de seguridad al comparar datos, como la dirección de la institución que emite la tarjeta y la dirección del titular de la tarjeta. 
				</p>
    </div>
    <div>
        <img src="https://github.com/CarlsRemy/CardBinRD/assets/49526881/69d5c6e3-e502-465a-aa23-3245018adfd6" alt="Descripción de la imagen">
    </div>
</div>

## Características Principales

Obtención de Datos BIN/IIN: Accede a información detallada sobre los números de identificación bancaria (BIN/IIN) específicos de la República Dominicana, incluyendo el banco emisor, el tipo de tarjeta y más.
Constando este de 435 BIN/IIN,

## Funciones Disponobles

###	getBIN(cardNumber: String): String
Devuelve el BIN/IIN el cardNumber proporcionado
```js
let BIN = getBIN("---223528-0td3l;;''")
console.log(BIN) // Resultado : 223528
```

###	getCardDetails(Bin: String): object
Devuelve los Datos  de la tarjeta para BIN/IIN Proporcionado
```js
let CardIssuer = getCardIssuer("223528")
console.log(CardIssuer) 
// Resultado : {"issuer": "BankReservas", "cardType": "DEBIT","cardLevel": "STANDARD", "provider": "MasterCard"}
```
###	getCardIssuer(Bin: String): String
Devuelve el Emisor de la tarjeta para BIN/IIN Proporcionado
```js
let CardIssuer = getCardIssuer("223528")
console.log(CardIssuer) // Resultado : BankReservas
```
###	getCardTypebyBIN(Bin: String): String
Devuelve el Tipo de la tarjeta para BIN/IIN Proporcionado
```js
let CardType = getCardTypebyBIN("223528")
console.log(CardLevel) // Resultado : DEBIT
```
###	getCardLevel(Bin: String): String
Devuelve la Clasificacion de la tarjeta para BIN/IIN Proporcionado
```js
let CardLevel = getCardLevel("223528")
console.log(CardLevel) // Resultado : STANDARD
```

###	getAllIssuers(): String[]
listado de los Emisores de Tarjetas de Dominicanos
```js
let ListBank = getAllIssuers()
console.log(ListBank) // Resultado : ['Asociacion Popular (APAP)', 'QIK Banco Digital'...]
```
###	searchByIssuer(issuer: : String) object[]
listado de los Emisores de Tarjetas de Dominicanos
```js
let ListBank = searchByIssuer("BankReservas")
console.log(ListBank) 
// Resultado : [{"BIN": "223528", "cardType": "DEBIT","cardLevel": "STANDARD", "provider": "MasterCard"},...]
```
###	isBINValid(Bin: String): Booleam
Devuelve si el BIN/IIN existe en el Listado
```js
let isBIN = isBINValid("0099")
console.log(isBIN) // Resultado: false
```

## Lista de bancos 
<section style="display: flex;align-items: flex-start;justify-content: flex-start;">
<ul>
	<li>BankReservas - 40</li>
	<li>Banco Atlantico - 4</li>
	<li>Banco Caribe - 15</li>
	<li>Banco BDI - 15</li>
	<li>Banesco - 24</li>
	<li>BHD Leon - 94</li>
	<li>Banco Ademi - 9</li>
	<li>Popular - 25</li>
	<li>QIK Banco Digital - 2</li>
</ul>
<ul>
	<li>Banco Promerica - 32</li>
	<li>Asociacion Cibao (ACAP) - 17</li>
	<li>Asociacion Popular (APAP) - 28</li>
	<li>Asociacion Nacional (ANAP) - 47</li>
	<li>Asociacion Bonao (ABONAP) - 5</li>
	<li>Asociacion Duarte (ADAP) - 5</li>
	<li>Asociacion Mocana (ASOMAP) - 1</li>
	<li>Asociacion Peravia - 4</li>
	<li>Asociacion La Vega Real (ALAVER) - 9</li>
</ul>
<ul>
	<li>Banco JMMB Bank - 1</li>
	<li>Banco Santa Cruz - 18</li>
	<li>ScotiaBank - 13</li>
	<li>Banco Lopez de Haro - 10</li>
	<li>Vimenca - 11</li>
	<li>Banco Fihogar - 2</li>
	<li>CitiaBank - 3</li>
	<li>Banco Fondesa - 1</li>
</ul>
</section>

### Bibliografia
- [Lista BIN\IIN](https://bincheck.io/es/do)
- [Entidades Bancareas](https://www.sb.gob.do/supervisados/entidades-de-intermediacion-financiera/)