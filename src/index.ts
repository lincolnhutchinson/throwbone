import random from 'random';
import seedrandom from 'seedrandom';

export function evaluateRoll(rollExpression: string) {
	let result = parseInt(rollExpression);

	if (Number.isInteger(result)) {
		return result;
	} else {
		throw InvalidSymbolError(rollExpression);
	}
}

function InvalidSymbolError(symbol: string) {
	return {
		"name": "Invalid Symbol Error",
		"message": `Invalid Symbol: ${symbol}`
	}
}

