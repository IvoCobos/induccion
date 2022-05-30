const numRom = require("./numeros");

describe("numeros", () => {
    it("numero romanos", () => {
        expect(numRom(36)).toEqual("XXXVI")
    }),
    it("numero romanos", () => {
        expect(numRom(500)).toEqual("D")
    })
})