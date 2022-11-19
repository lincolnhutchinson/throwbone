import test from 'ava';

import { evaluateRoll, rollDice, setThrowBoneSeed } from './index.js';

test('evaluateRoll() returns a number', t => {
	t.is(evaluateRoll("3"), 3);
});

test('evaluateRoll() throws error if handed a word it doesn\'t know', t => {
	t.throws(() => { evaluateRoll('moist') });
});

test('rollDice() returns a number', t => {
	t.is(rollDice(1, 1), 1);
});


const SIDES_TO_TEST = [ 4, 6, 8, 10, 12, 20 ];
const QUANTITIES_TO_TEST = [ 1, 2, 5, 10 ];

QUANTITIES_TO_TEST.forEach((quantity) => {
	SIDES_TO_TEST.forEach((sides) => {
		const minimum = quantity * 1;
		const maximum = quantity * sides;
		const result = rollDice(quantity, sides);

		test(`rollDice() returns a value from ${minimum} to ${maximum} when rolling ${quantity}d${sides}`, t => {
			t.true(result >= minimum, `${result} is at least ${minimum}`);
			t.true(result <= maximum, `${result} is at most ${maximum}`);
		});
	});
});

test('rollDice() provides consistent results when setThrowBoneSeed() used', t => {
	const SEED = "I AM THE ARCHMAGE OF THE ENTIRE FREAKIN UNIVERSE";
	setThrowBoneSeed(SEED);
	let results: number[] = [];

	SIDES_TO_TEST.forEach((sides) => {
		let roll = rollDice(4, sides);
		results.push(roll);
	});

	t.snapshot(results);
});

