const {sum} = require ('./app.js');

test("Test 1. Add 7 + 3 to equal 10.", () => {
    expect (sum(7,3)).toBe(10);
});


const { fromEurotoDollar } = require ('./app.js');

test("One euro should be 1.07 dollars", () => {
    expect(fromEurotoDollar(3.5)).toBe(3.745);
});

const { fromDollarToYen } = require ('./app.js');

test("One dollar should be 154.62 yen", () => {
    expect(fromDollarToYen(3)).toBe(463.86);
});

const { fromYenToPound } = require ('./app.js');

test("One Yen should be 0.87 pound", () => {
    expect(fromYenToPound(3)).toBe(2.61);
});
