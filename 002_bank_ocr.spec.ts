import { expect, describe, it } from "bun:test"

//    _  _     _  _  _  _  _
//  | _| _||_||_ |_   ||_||_|
//  ||_  _|  | _||_|  ||_| _|
//111222333444555666777888999

describe("User Story 1: Scan File", () => {
    const input0 = 
        "    _  _     _  _  _  _  _ \n" + 
        "  | _| _||_||_ |_   ||_||_|\n" + 
        "  ||_  _|  | _||_|  ||_| _|\n"
        "                           \n"
    const input1 = 
        " _     _  _     _  _  _  _ \n" + 
        "| |  | _| _||_||_ |_   ||_|\n" + 
        "|_|  ||_  _|  | _||_|  ||_|\n"
        "                           \n"

    it("parseAccountNumber()", () => {
        const output = parseAccountNumber(input0)
        expect(output).toBe(123456789)
    })
    it("parseAccountNumber()", () => {
        const output = parseAccountNumber(input1)
        expect(output).toBe(12345678)
    })
    it("parseDigit() -> 0", () => {
        const n = parseDigit(input1, 0, 0)
        expect(n).toBe(0)
    })
    it("parseDigit() -> 1", () => {
        const n = parseDigit(input0, 0, 0)
        expect(n).toBe(1)
    })
    it("parseDigit() -> 2", () => {
        const n = parseDigit(input0, 1, 0)
        expect(n).toBe(2)
    })
    it("parseDigit() -> 3", () => {
        const n = parseDigit(input0, 2, 0)
        expect(n).toBe(3)
    })
    it("parseDigit() -> 4", () => {
        const n = parseDigit(input0, 3, 0)
        expect(n).toBe(4)
    })
    it("parseDigit() -> 5", () => {
        const n = parseDigit(input0, 4, 0)
        expect(n).toBe(5)
    })
    it("parseDigit() -> 6", () => {
        const n = parseDigit(input0, 5, 0)
        expect(n).toBe(6)
    })
    it("parseDigit() -> 7", () => {
        const n = parseDigit(input0, 6, 0)
        expect(n).toBe(7)
    })
    it("parseDigit() -> 8", () => {
        const n = parseDigit(input0, 7, 0)
        expect(n).toBe(8)
    })
    it("parseDigit() -> 9", () => {
        const n = parseDigit(input0, 8, 0)
        expect(n).toBe(9)
    })
})

function parseAccountNumber(input: string) {
    let output = 0
    for(let x=0; x<9; ++x) {
        output *= 10
        output += parseDigit(input, x, 0)
    }
    return output
}

function parseDigit(input: string, x: number, y: number) {
    const pattern = [
        " _ | ||_|",
        "     |  |",
        " _  _||_ ",
        " _  _| _|",
        "   |_|  |",
        " _ |_  _|",
        " _ |_ |_|",
        " _   |  |",
        " _ |_||_|",
        " _ |_| _|"
    ]
    // we extract the number
    x = x * 3
    y = y * 4
    let s = ""
    for(let iy=y; iy<y+3; ++iy) {
        for(let ix=x; ix<x+3; ++ix) {
            s += input.charAt(ix + iy * 28)
        }
    }
    // then we just compare the resulting string
    for(let patternIndex=0; patternIndex<pattern.length; ++patternIndex) {
        if (s === pattern[patternIndex]) {
            return patternIndex
        }
    }
    throw Error(`failed to read number: '${s}'`)
}
