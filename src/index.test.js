import { expect } from "chai"
import { DateUtils } from "./index"

describe("index", () => {

	it("should export date correctly", () => {
		expect(DateUtils).not.to.equal(null)
		expect(DateUtils.truncateDateToDay).not.to.equal(null)
		expect(typeof DateUtils.truncateDateToDay).to.equal("function")
	})
})
