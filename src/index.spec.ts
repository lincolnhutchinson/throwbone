import { assert } from 'chai';
import { rollDice } from './index';

describe('throwbone', function() {
	describe('rollDice', function() {
		it('should return a number when given a single number in a string', function() {
			assert.equal(rollDice("3"), 3);
		});

		it('should throw an error if handed a word it doesn\'t recognize', function() {
			assert.throw(() => rollDice('moist'), 'moist');
		});
	});
});
