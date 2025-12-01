const sum= require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of "2" and 3 to equal 5', () => {
    expect(sum('2', 3)).toBe(5);
 });
test('sum of "4" and "5" to equal 9', () => {
    expect(sum('4', '5')).toBe(9);
 });
 test("all arguments must be pass for sum function", () => {
    expect(sum(1)).toBeNaN();
    });