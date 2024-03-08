import MonthUtils from './monthUtils'

describe('MonthUtils', () => {
	describe('getPrevMonthLastDay', () => {
		test('should return the date of the previous month', () => {
			const currentMonth = new Date('2024-03-15')
			const expectedPreviousMonth = new Date('2024-02-29')
			const got1 = MonthUtils.getPrevMonthLastDay(currentMonth)
			expect(got1.getDate()).toEqual(expectedPreviousMonth.getDate())
			expect(
				MonthUtils.getPrevMonthLastDay(currentMonth).getMonth()
			).toEqual(expectedPreviousMonth.getMonth())
		})
	})

	describe('getLastDayOfMonth', () => {
		test('should return the last day of the month', () => {
			const date1 = new Date('2024-02-01') // February 2024
			const date2 = new Date('2024-03-15') // March 2024
			const date3 = new Date('2024-04-10') // April 2024

			// Expected last days of the months
			const expectedLastDay1 = new Date('2024-02-29')
			const expectedLastDay2 = new Date('2024-03-31')
			const expectedLastDay3 = new Date('2024-04-30')

			expect(MonthUtils.getLastDayOfMonth(date1)).toEqual(
				expectedLastDay1
			)
			expect(MonthUtils.getLastDayOfMonth(date2)).toEqual(
				expectedLastDay2
			)
			expect(MonthUtils.getLastDayOfMonth(date3)).toEqual(
				expectedLastDay3
			)
		})
	})
})
