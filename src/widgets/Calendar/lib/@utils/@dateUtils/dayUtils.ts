import MonthUtils from './monthUtils'

/**
 * Have getNextDay(), getPrevDay()
 */
class DayUtils {
	static getNextDay(today: Date): Date {
		const lastDayOfMonth = MonthUtils.getLastDayOfMonth(
			new Date(today.getMonth())
		)
		const todayDay = today.getDate()
		const todayYear = today.getFullYear()
		const todayMonth = today.getMonth()

		const nextMonthDay = new Date(todayYear, todayMonth + 1, 1)
		const thisMonthDay = new Date(todayYear, todayMonth, todayDay + 1)
		nextMonthDay.setUTCHours(24)
		thisMonthDay.setUTCHours(24)
		return todayDay == lastDayOfMonth.getDate()
			? nextMonthDay
			: thisMonthDay
	}

	static getPrevDay(today: Date): Date {
		if (today.getDate() == 1) {
			const prevDay = new Date(today.getFullYear(), today.getMonth(), 1)
			prevDay.setUTCHours(0)
			return prevDay
		}
		const prevDay = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate()
		)
		prevDay.setUTCHours(0)
		return prevDay
	}
}

export default DayUtils
