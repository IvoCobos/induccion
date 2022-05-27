function numRom(number) {
    const roman = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, XI: 9, V: 5, IV: 4, I: 1
    }
    let result = " ";
    for (let i in roman) {
        result += i.repeat(Math.floor(number / roman[i]))
        number = number % roman[i]
    }
    return result
}
console.log(numRom(10))

module.exports = numRom