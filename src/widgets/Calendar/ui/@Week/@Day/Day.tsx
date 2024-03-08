'use clients'

import { FC, useEffect } from 'react'

import clsx from 'clsx'

import { IEvent } from '../../../model/@interfaces'
import Event from './@Event/Event'
import styles from './Day.module.scss'

type TDayProps = {
	dayName: string
	dayOfMonth: number
	events: IEvent[]
	clocks: string[]
}

const Day: FC<TDayProps> = ({ dayName, dayOfMonth, events, clocks }) => {
	// useEffect(() => {
	// 	console.log("Day ", dayName, events)
	// }, [events])

	/**
	 * Adding task by onClick on day tape
	 */
	const onClickHandler = () => {}

	return (
		<div
			className={clsx(
				'grid grid-rows-subgrid grid-cols-subgrid row-span-full',
				styles.container
			)}
		>
			<h1 className={clsx(styles.header, 'row-start-1 row-end-2')}>
				{dayName} {dayOfMonth}
			</h1>
			{/* Time grid */}
			<div
				className='grid grid-rows-subgrid row-start-2 col-start-1 col-end-2'
				style={{ gridRowEnd: clocks.length + 1 }}
			>
				{clocks.map((clock, idx) => (
					<div
						key={idx}
						className='border-b border-[#F5F6F7] border-solid'
					></div>
				))}
			</div>
			{/* Events list */}
			<div
				className='row-start-2 row-end-13 col-start-1 col-end-2 relative'
				onClick={onClickHandler}
			>
				{events.map(event => (
					<Event {...event} key={event.id} clocks={clocks} />
				))}
			</div>
		</div>
	)
}

export default Day
