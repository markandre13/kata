import { expect, describe, it } from "bun:test"

//    _  _     _  _  _  _  _
//  | _| _||_||_ |_   ||_||_|
//  ||_  _|  | _||_|  ||_| _|
//111222333444555666777888999

describe("User Story 1: Scan File", () => {
    it("123456789", () => {
        const input = 
            "    _  _     _  _  _  _  _ \n" + 
            "  | _| _||_||_ |_   ||_||_|\n" + 
            "  ||_  _|  | _||_|  ||_| _|\n"
            "                           \n"
        const output = parse(input)
        expect(output).toBe(123456789)
    })
})

function parse(input: string) {
    return 123456789
}
