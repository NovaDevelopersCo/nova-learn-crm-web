import DayUtils from './dayUtils'

describe('DayUtils', () => {
	describe('getNextDay', () => {
		test('should return the next day', () => {
			const today1 = new Date('2024-03-15')
			const today2 = new Date('2024-03-31')
			const today3 = new Date('2024-02-28')

			// Expected next days
			const expectedNextDay1 = new Date('2024-03-16')
			const expectedNextDay2 = new Date('2024-04-01')
			const expectedNextDay3 = new Date('2024-02-29')

			expect(DayUtils.getNextDay(today1)).toEqual(expectedNextDay1)
			expect(DayUtils.getNextDay(today2)).toEqual(expectedNextDay2)
			expect(DayUtils.getNextDay(today3)).toEqual(expectedNextDay3)
		})
	})

	describe('getPrevDay', () => {
		test('should return the previous day', () => {
			const today1 = new Date('2024-03-15')
			const today2 = new Date('2024-03-01')
			const today3 = new Date('2024-02-01')

			// Expected previous days
			const expectedPrevDay1 = new Date('2024-03-14')
			const expectedPrevDay2 = new Date('2024-02-29')
			const expectedPrevDay3 = new Date('2024-01-31')

			expect(DayUtils.getPrevDay(today1)).toEqual(expectedPrevDay1)
			expect(DayUtils.getPrevDay(today2)).toEqual(expectedPrevDay2)
			expect(DayUtils.getPrevDay(today3)).toEqual(expectedPrevDay3)
		})
	})
})
