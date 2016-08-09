/* eslint no-magic-numbers: ["error", { "ignore": [0] }] */

import { expect } from "chai"
import truncateDateToDay from "./truncateDateToDay"

describe("date/truncateDateToDay", () => {

	it("should return null for null", () => {
		const expected = null
		const actual = truncateDateToDay(null)

		expect(actual).to.equal(expected)
	})

	it("should return null for non dates", () => {
		const expected = null
		const actual = truncateDateToDay("hello")

		expect(actual).to.equal(expected)
	})

	it("should return a correct date", () => {
		const now = new Date()
		const actual = truncateDateToDay(now)

		expect(actual).not.to.equal(null)
		expect(actual.getFullYear()).to.equal(now.getFullYear())
		expect(actual.getMonth()).to.equal(now.getMonth())
		expect(actual.getDate()).to.equal(now.getDate())
		expect(actual.getMinutes()).to.equal(0)
		expect(actual.getSeconds()).to.equal(0)
		expect(actual.getMilliseconds()).to.equal(0)
	})

	it("should return today for undefined", () => {
		const now = new Date()
		const expected = truncateDateToDay(now)
		const actual = truncateDateToDay()

		expect(actual).not.to.equal(expected)
	})
})
