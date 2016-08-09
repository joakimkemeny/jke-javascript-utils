import { expect } from "chai"
import { truncateDateToDay } from "./index"

describe("date/index", () => {

	it("should export truncateDateToDate correctly", () => {
		expect(truncateDateToDay).not.to.equal(null)
		expect(typeof truncateDateToDay).to.equal("function")
	})
})
