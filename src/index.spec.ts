import { assert } from 'chai';
import { evaluateRoll, rollDice } from './index.js';

describe('throwbone', function() {
	describe('evaluateRoll()', function() {
		it('should return a number when given a single number in a string', function() {
			assert.equal(evaluateRoll("3"), 3);
		});

		it('should throw an error if handed a word it doesn\'t recognize', function() {
			assert.throw(() => evaluateRoll('moist'), 'moist');
		});
	});

	describe('rollDice()', function() {
		it('should return a number', function() {
			assert.isNumber(rollDice(1, 1));
		});

		const sides_to_test = [ 4, 6, 8, 10, 12, 20 ];
		const quantities_to_test = [ 1, 2, 5, 10 ];

		quantities_to_test.forEach((quantity) => {
			sides_to_test.forEach((sides) => {
				const minimum = quantity * 1;
				const maximum = quantity * sides;
				const result = rollDice(quantity, sides);

				it(`should return a value from ${minimum} to ${maximum} when rolling ${quantity}d${sides}`, function() {
					assert.isAtLeast(result, minimum);
					assert.isAtMost(result, maximum);
				});
			});
		});
	});
});
