const truncateDateToDay = (date = new Date()) => {
	if (!date || !(date instanceof Date)) {
		return null
	}

	const truncatedDate = new Date(date.getTime())
	truncatedDate.setHours(0)
	truncatedDate.setMinutes(0)
	truncatedDate.setSeconds(0)
	truncatedDate.setMilliseconds(0)
	return truncatedDate
}

export default truncateDateToDay
