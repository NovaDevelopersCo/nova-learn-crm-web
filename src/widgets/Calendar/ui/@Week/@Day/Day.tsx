'use clients'

import React, { useState } from 'react'

// eslint-disable-next-line import/no-internal-modules
import CalendarEvents from '@/data/Calendar.json'

import { IEvent } from '../../../model/@interfaces'
import Event from './@Event/Event'
import styles from './Day.module.scss'

type TDayProps = {
	dayName: string
	dayOfMonth: number
	events: IEvent[]
}

const Day: React.FC<TDayProps> = ({ dayName, dayOfMonth, events }) => {
	const [taskCount, setTaskCount] = useState<number>(0)
	/**
	 * Adding task by onClick on day tape
	 */
	const onClickHandler = () => {}

	return (
		<div className={styles.dayCell}>
			<div className={styles.dayName}>
				<h1>{dayName}</h1>
				<p>{dayOfMonth}</p>
			</div>
			<div onClick={onClickHandler}>
				{events.map(event => (
					<Event {...event} key={event.id} />
				))}
			</div>
		</div>
	)
}

export default Day
