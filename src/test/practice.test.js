const product = require("./practice")

test("multiplies 2 * 3 to equal 6", () => {
     expect(product(2,3)).toBe(6)
})

test("multiplies 4 * 4 to equal 16", () => {
     expect(product(4, 4)).toBe(16)
})

test("multiplies 5 * 4 to equal 20", () => {
     expect(product(5, 4)).toBe(16)
})





