/* eslint-env jest */
import { truncateDateToDay } from "./index"

describe("date", () => {

	test("should export truncateDateToDay correctly", () => {
		expect(truncateDateToDay).not.toEqual(null)
		expect(typeof truncateDateToDay).toEqual("function")
	})
})
