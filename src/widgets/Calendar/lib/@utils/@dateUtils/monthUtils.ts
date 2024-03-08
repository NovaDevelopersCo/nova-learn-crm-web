class MonthUtils {
	static getPrevMonthLastDay(curDate: Date): Date {
		const prevMonth = new Date(
			curDate.getFullYear(),
			curDate.getMonth() - 1,
			1
		)
		return new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0)
	}

	static getLastDayOfMonth(date: Date): Date {
		const lastDayOfMonth = new Date(
			new Date(date).getFullYear(),
			new Date(date).getMonth() + 1,
			1
		)
		lastDayOfMonth.setUTCHours(0)
		return lastDayOfMonth
	}
}

export default MonthUtils
