import { rollDice } from "./index"

test("single number expression", () => {
	expect(rollDice("3")).toBe(3);
});
