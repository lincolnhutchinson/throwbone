import random from 'random';
import seedrandom from 'seedrandom';

export function evaluateRoll(rollExpression: string) {
	const DICE_RE = /(\d+)d(\d+)/;
	let result = -1; 

	const dice_match = rollExpression.match(DICE_RE);
	if (dice_match != null) {
		const quantity = parseInt(dice_match[1]);
		const sides = parseInt(dice_match[2]);

		result = rollDice(quantity, sides);
	} else {
		result = parseInt(rollExpression);
	}

	if (Number.isInteger(result)) {
		return result;
	} else {
		throw new InvalidSymbolError(rollExpression);
	}
}

export function rollDice(quantity: number, sides: number) {
	let result = 0;

	for (let i = 0; i < quantity; i++) {
		result += random.int(1, sides);
	}

	return result;
}

export function setThrowBoneSeed(seed: string) {
	random.use(seedrandom(seed));
}

class InvalidSymbolError extends Error {
	constructor(symbol: string) {
		super(`Invalid Symbol: ${symbol}`);
		this.name = "Invalid Symbol Error";
	}
}

