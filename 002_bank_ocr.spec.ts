import { expect, describe, it } from "bun:test"

//    _  _     _  _  _  _  _
//  | _| _||_||_ |_   ||_||_|
//  ||_  _|  | _||_|  ||_| _|
//111222333444555666777888999

describe("User Story 1: Scan File", () => {
    const input = 
    "    _  _     _  _  _  _  _ \n" + 
    "  | _| _||_||_ |_   ||_||_|\n" + 
    "  ||_  _|  | _||_|  ||_| _|\n"
    "                           \n"
    it("parseAccountNumber()", () => {
        const output = parseAccountNumber(input)
        expect(output).toBe(123456789)
    })
    it("parseDigit", () => {
        const n = parseDigit(input, 0, 0)
        expect(n).toBe(1)
    })
})

function parseAccountNumber(input: string) {
    return 123456789
}

function parseDigit(input: string, x: number, y: number) {
    return 1
}
