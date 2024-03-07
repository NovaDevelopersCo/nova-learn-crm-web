import DateConverters from './dateConverters'

describe('DateConverters', () => {
	describe('weekRangeConverter', () => {
		test('No description', () => {
			const date1 = new Date('2024-03-13')
			expect(DateConverters.weekRangeConverter(date1)).toEqual(
				'March 11 – 17, 2024'
			)
		})
	})
})
