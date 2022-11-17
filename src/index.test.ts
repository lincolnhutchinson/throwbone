import { rollDice } from "./index"

test("single number expression", () => {
	expect(rollDice("3")).toBe(3);
	expect(rollDice("14")).toBe(14);
	expect(rollDice("9001")).toBe(9001);
});

test("test invalid single words", () => {
	let words_to_test = [ "moist", "three", "donuts", "fifteen" ];

	words_to_test.forEach((word) => {
		expect(() => { rollDice(word) }).toThrow(word);
	});
});
