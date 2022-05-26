const camino = require("./pasos");

describe("camino", () => {
    it("numero de pasos", () => {
        expect(camino([1, 2, 3, 4, 6, 7, 5, 9], 4, 7)).toEqual([6])
    })
    it("numero de pasos", () => {
        expect(camino([1, 2, 3, 4, 6, 7, 5, 9], 2, 5)).toEqual([1, 9])
    })
    it("numero de pasos", () => {
        expect(camino([2,4,6,8,10,1,3,5,7,9], 6, 5)).toEqual([8,10,1,3])
    })
})