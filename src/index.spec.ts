import test from 'ava';

import { evaluateRoll, rollDice } from './index.js';

test('evaluateRoll() returns a number', t => {
	t.is(evaluateRoll("3"), 3);
});

test('evaluateRoll() throws error if handed a word it doesn\'t know', t => {
	t.throws(() => { evaluateRoll('moist') });
});

test('rollDice() returns a number', t => {
	t.is(rollDice(1, 1), 1);
});


const sides_to_test = [ 4, 6, 8, 10, 12, 20 ];
const quantities_to_test = [ 1, 2, 5, 10 ];

quantities_to_test.forEach((quantity) => {
	sides_to_test.forEach((sides) => {
		const minimum = quantity * 1;
		const maximum = quantity * sides;
		const result = rollDice(quantity, sides);

		test(`rollDice() returns a value from ${minimum} to ${maximum} when rolling ${quantity}d${sides}`, t => {
			t.true(result >= minimum, `${result} is at least ${minimum}`);
			t.true(result <= maximum, `${result} is at most ${maximum}`);
		});
	});
});
