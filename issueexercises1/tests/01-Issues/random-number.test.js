//const score = require('./random-number');

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

test('the input is a number', () => {
    // const myMock = jest.fn();
    // myMock = mockReturnValueOnce(4);
    // userNum = myMock();
    expect(Math.random()).toBe(0.5);
})