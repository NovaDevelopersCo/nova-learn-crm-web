import WeekUtils from './weekUtils'

describe('WeekUtils', () => {
	describe('getMondayOfWeek', () => {
		test('should return Monday of the current week', () => {
			const today1 = new Date('2024-03-15') // Wednesday, 15th March 2024
			const today2 = new Date('2024-03-01') // Wednesday, 15th March 2024
			const today3 = new Date('2024-02-29') // Wednesday, 15th March 2024
			const expectedMonday1 = new Date('2024-03-11') // Monday, 12th March 2024
			const expectedMonday2 = new Date('2024-02-26') // Monday, 12th March 2024
			const expectedMonday3 = new Date('2024-02-26') // Monday, 12th March 2024

			expect(WeekUtils.getMondayOfWeek(today1)).toEqual(expectedMonday1)
			expect(WeekUtils.getMondayOfWeek(today2)).toEqual(expectedMonday2)
			expect(WeekUtils.getMondayOfWeek(today3)).toEqual(expectedMonday3)
		})
	})

	describe('getDatesOfWeek', () => {
		test('should return array of week dates', () => {
			const today = new Date('2024-03-15') // Wednesday, 15th March 2024
			const weekDates = WeekUtils.getDatesOfWeek(today)

			// Checking if the length of returned array is 7
			expect(weekDates.length).toBe(7)

			// Expecting the first day to be Monday
			expect(weekDates[0].getDay()).toBe(1) // Monday

			// Expecting the last day to be Sunday
			expect(weekDates[6].getDay()).toBe(0) // Sunday
		})
	})

	describe('getNextWeekDays', () => {
		test('should return array of dates for next week', () => {
			const today = new Date('2024-03-15') // Wednesday, 15th March 2024
			const nextWeekDates = WeekUtils.getNextWeekDays(today)

			// Checking if the length of returned array is 7
			expect(nextWeekDates.length).toBe(7)

			// Expecting the first day to be Monday of the next week
			expect(nextWeekDates[0].getDay()).toBe(1) // Monday

			// Expecting the last day to be Sunday of the next week
			expect(nextWeekDates[6].getDay()).toBe(0) // Sunday
		})
	})

	describe('getPrevWeekDays', () => {
		test('should return array of dates for previous week', () => {
			const today = new Date('2024-03-15') // Wednesday, 15th March 2024
			const prevWeekDates = WeekUtils.getPrevWeekDays(today)

			// Checking if the length of returned array is 7
			expect(prevWeekDates.length).toBe(7)

			// Expecting the first day to be Monday of the previous week
			expect(prevWeekDates[0].getDay()).toBe(1) // Monday

			// Expecting the last day to be Sunday of the previous week
			expect(prevWeekDates[6].getDay()).toBe(0) // Sunday
		})
	})
})
