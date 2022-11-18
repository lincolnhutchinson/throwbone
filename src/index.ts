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

export function rollDice(quantity: number, sides: number) {
	let result = 0;

	for (let i = 0; i < quantity; i++) {
		result += random.int(1, sides);
	}

	return result;
}

function InvalidSymbolError(symbol: string) {
	return {
		"name": "Invalid Symbol Error",
		"message": `Invalid Symbol: ${symbol}`
	}
}

