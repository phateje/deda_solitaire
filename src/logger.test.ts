const { log } = require("./logger.ts")

test('silly test', () => {
    expect(log('asd')).toBe(3)
})