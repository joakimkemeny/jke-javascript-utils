import { expect } from "chai"
import { date } from "./index"

describe("index", () => {

	it("should export date correctly", () => {
		expect(date).not.to.equal(null)
		expect(date.truncateDateToDay).not.to.equal(null)
		expect(typeof date.truncateDateToDay).to.equal("function")
	})
})
