import React, { FC, useState } from 'react'

import { DateUtils } from '../../lib/@utils'
import { IEvent } from '../../model/@interfaces'
import Day from './@Day/Day'

const daysOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
]

type TWeekProps = { date: Date; events: IEvent[] }

const Week: FC<TWeekProps> = ({ date, events }) => {
	const week = DateUtils.WeekUtils.getDatesOfWeek(date)
	// const [curWeek, setCurWeek] = useState<number>()

	return (
		<>
			{week.map((dayDate, index) => (
				<Day
					key={index}
					dayName={daysOfWeek[index]}
					dayOfMonth={dayDate.getDate()}
					events={events.filter(
						el =>
							el.date.getDate() == dayDate.getDate() &&
							el.date.getMonth() == dayDate.getMonth() &&
							el.date.getFullYear() == dayDate.getFullYear()
					)}
				/>
			))}
		</>
	)
}

export default Week
