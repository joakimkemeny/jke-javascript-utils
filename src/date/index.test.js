import { expect } from "chai"
import { truncateDateToDay } from "./index"

describe("date", () => {

	it("should export truncateDateToDay correctly", () => {
		expect(truncateDateToDay).not.to.equal(null)
		expect(typeof truncateDateToDay).to.equal("function")
	})
})
