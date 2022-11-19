import test from 'ava';

import { evaluateRoll, rollDice, setThrowBoneSeed } from './index.js';


const SEED = "I AM THE ARCHMAGE OF THE ENTIRE FREAKIN UNIVERSE";
const SIDES_TO_TEST = [ 4, 6, 8, 10, 12, 20 ];
const QUANTITIES_TO_TEST = [ 1, 2, 5, 10 ];

test('evaluateRoll() returns a number', t => {
	t.is(evaluateRoll("3"), 3);
});

test('evaluateRoll() throws error if handed a word it doesn\'t know', t => {
	t.throws(() => { evaluateRoll('moist') });
});

test('rollDice() returns a number', t => {
	t.is(rollDice(1, 1), 1);
});

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
	setThrowBoneSeed(SEED);
	let results: number[] = [];

	SIDES_TO_TEST.forEach((sides) => {
		let roll = rollDice(4, sides);
		results.push(roll);
	});

	t.snapshot(results);
});

test('evaluateRoll parses single digit dice expressions', t => {
	setThrowBoneSeed(SEED);
	const QUANTITY = 4;
	const SIDES = 6;

	const MINIMUM = QUANTITY * 1;
	const MAXIMUM = QUANTITY * SIDES;

	const RESULT = evaluateRoll(`${QUANTITY}d${SIDES}`);

	t.true(RESULT >= MINIMUM, `${RESULT} is at least ${MINIMUM}`);
	t.true(RESULT <= MAXIMUM, `${RESULT} is at most ${MAXIMUM}`);

	t.snapshot(RESULT);
});

test('evaluateRoll parses multi-digit dice expressions', t => {
	setThrowBoneSeed(SEED);
	const QUANTITY = 423;
	const SIDES = 602;

	const MINIMUM = QUANTITY * 1;
	const MAXIMUM = QUANTITY * SIDES;

	const RESULT = evaluateRoll(`${QUANTITY}d${SIDES}`);

	t.true(RESULT >= MINIMUM, `${RESULT} is at least ${MINIMUM}`);
	t.true(RESULT <= MAXIMUM, `${RESULT} is at most ${MAXIMUM}`);

	t.snapshot(RESULT);
});

test.todo('evaluateRoll can add multiple expressions');

