import { DayUtils } from '.'
import MonthUtils from './monthUtils'

/**
 * Completed getMondayOfWeek, getDatesOfWeek, getNextWeekDays
 * Need to do getPrevWeekDays,
 */
class WeekUtils {
	/**
	 * Function which converts today date to monday on the same week
	 * @param today {Date} today date
	 * @returns {Date} Monday of current week
	 */
	static getMondayOfWeek(today: Date): Date {
		const mondayDate = new Date(today)
		const currentDay_IndexOfWeek = new Date(today).getDay()

		// Определяем разницу между текущим днем недели и понедельником (0 - текущий день, 1 - вторник, и т.д.)
		const diff =
			currentDay_IndexOfWeek === 0 ? -6 : 1 - currentDay_IndexOfWeek

		// Устанавливаем понедельник текущей недели
		mondayDate.setDate(new Date(today).getDate() + diff)
		return mondayDate
	}

	/**
	 * @returns Array month dates of days for current week
	 */
	static getDatesOfWeek(today: Date): Date[] {
		const week: Date[] = []
		const mondayDate = WeekUtils.getMondayOfWeek(today)
		const lastDateOfMonth =
			mondayDate.getDate() > new Date(today).getDate()
				? MonthUtils.getLastDayOfMonth(
						MonthUtils.getPrevMonthLastDay(today)
					)
				: MonthUtils.getLastDayOfMonth(today)

		let curDate = mondayDate
		for (
			let i = 1, iDayDate = mondayDate.getDate();
			i <= 7;
			i++, iDayDate++
		) {
			if (iDayDate == lastDateOfMonth.getDate()) {
				week.push(curDate)
				iDayDate = 0
			} else {
				week.push(curDate)
			}
			curDate = DayUtils.getNextDay(curDate)
		}

		return week
	}

	static getNextWeekDays(today: Date): Date[] {
		const curWeek = WeekUtils.getDatesOfWeek(today)
		const curWeekSun = curWeek[6]
		return WeekUtils.getDatesOfWeek(DayUtils.getNextDay(curWeekSun))
	}

	static getPrevWeekDays(today: Date): Date[] {
		const curWeek = WeekUtils.getDatesOfWeek(today)
		const curWeekMon = curWeek[0]
		return WeekUtils.getDatesOfWeek(DayUtils.getPrevDay(curWeekMon))
	}
}

export default WeekUtils
