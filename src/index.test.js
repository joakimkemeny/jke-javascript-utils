/* eslint-env jest */
import { DateUtils } from "./index"

describe("index", () => {

	test("should export date correctly", () => {
		expect(DateUtils).not.toEqual(null)
		expect(DateUtils.truncateDateToDay).not.toEqual(null)
		expect(typeof DateUtils.truncateDateToDay).toEqual("function")
	})
})
