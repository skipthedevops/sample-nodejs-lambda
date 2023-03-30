import * as assert from "assert"
import { describe, it } from "mocha"
import * as sinon from "sinon"

import { main } from "../src/main"

describe("Test of the main function", () => {
    beforeEach(() => {
        sinon.restore()
    });

    it("A supplied job is printed", () => {
        const consoleStub = sinon.stub(console, "log")
        const expectedOutput = 'Received job: {"test":"job"}'

        main({test:"job"})

        assert.equal(consoleStub.calledWithExactly(expectedOutput), true)
    })
})