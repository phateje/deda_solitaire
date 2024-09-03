const { log } = require("./logger.js")

test('silly test', () => {
    expect(log('asd')).toBe(3)
})