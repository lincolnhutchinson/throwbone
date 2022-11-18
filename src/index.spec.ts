import { assert } from 'chai';
import { evaluateRoll } from './index.js';

describe('throwbone', function() {
	describe('evaluateRoll()', function() {
		it('should return a number when given a single number in a string', function() {
			assert.equal(evaluateRoll("3"), 3);
		});

		it('should throw an error if handed a word it doesn\'t recognize', function() {
			assert.throw(() => evaluateRoll('moist'), 'moist');
		});
	});
});
