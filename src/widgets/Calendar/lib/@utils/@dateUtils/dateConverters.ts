import WeekUtils from './weekUtils'

class DateConverters {
	static weekRangeConverter(date: Date): string {
		// Массив с названиями месяцев
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		const week = WeekUtils.getDatesOfWeek(date)
		const monday = week[0]
		const sunday = week[6]

		// Получение значений дня, месяца и года из объекта Date
		const startMonth = monthNames[monday.getMonth()]
		const year = sunday.getFullYear()

		// Создание форматированной строки
		const formattedDateRange = `${startMonth} ${monday.getDate()} – ${sunday.getDate()}, ${year}`

		return formattedDateRange
	}

	static stringSecsToDate(date: string): Date {
		const curDate = new Date(1970, 0, 1)
		curDate.setTime(+date)
		return curDate
	}
}

export default DateConverters
