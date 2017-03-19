/* eslint-env jest */
import truncateDateToDay from "./truncateDateToDay"

describe("date/truncateDateToDay", () => {

	test("should return null for null", () => {
		const expected = null
		const actual = truncateDateToDay(null)

		expect(actual).toEqual(expected)
	})

	test("should return null for non dates", () => {
		const expected = null
		const actual = truncateDateToDay("hello")

		expect(actual).toEqual(expected)
	})

	test("should return a correct date", () => {
		const now = new Date()
		const actual = truncateDateToDay(now)

		expect(actual).not.toEqual(null)
		expect(actual.getFullYear()).toEqual(now.getFullYear())
		expect(actual.getMonth()).toEqual(now.getMonth())
		expect(actual.getDate()).toEqual(now.getDate())
		expect(actual.getMinutes()).toEqual(0)
		expect(actual.getSeconds()).toEqual(0)
		expect(actual.getMilliseconds()).toEqual(0)
	})

	test("should return today for undefined", () => {
		const now = new Date()
		const expected = truncateDateToDay(now)
		const actual = truncateDateToDay()

		expect(actual).toEqual(expected)
	})
})
