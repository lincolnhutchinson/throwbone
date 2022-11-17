console.log("Let's throw some bones!");

export function rollDice(diceExpression: string) {
	let result = parseInt(diceExpression);

	if (Number.isInteger(result)) {
		return result;
	} else {
		throw InvalidSymbolError(diceExpression);
	}
}

function InvalidSymbolError(symbol: string) {
	return {
		"name": "Invalid Symbol Error",
		"message": `Invalid Symbol: ${symbol}`
	}
}

