import { timesTwo, timesThree } from "./function";

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});

test("Multiplies by three", () => {
    expect(timesThree(4)).toBe(12);
});