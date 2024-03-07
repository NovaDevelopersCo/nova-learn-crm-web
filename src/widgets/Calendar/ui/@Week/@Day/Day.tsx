'use clients'

import { FC, useState } from 'react'

import clsx from 'clsx'

import { IEvent } from '../../../model/@interfaces'
import Event from './@Event/Event'
import styles from './Day.module.scss'

type TDayProps = {
	dayName: string
	dayOfMonth: number
	events: IEvent[]
}

const Day: FC<TDayProps> = ({ dayName, dayOfMonth, events }) => {
	const [taskCount, setTaskCount] = useState<number>(0)
	/**
	 * Adding task by onClick on day tape
	 */
	const onClickHandler = () => {}

	const clocks = [
		'09',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20'
	]

	return (
		<div
			className={clsx(
				'grid grid-rows-subgrid grid-cols-subgrid row-span-full',
				styles.container
			)}
		>
			<h1 className={styles.header}>
				{dayName} {dayOfMonth}
			</h1>
			{/* Time grid */}
			<div className='grid row-span-12'>
				{clocks.map((clock, idx) => (
					<div
						key={idx}
						className='border-b border-[#F5F6F7] border-solid'
					></div>
				))}
			</div>
			{/* Events list */}
			<div className='absolute' onClick={onClickHandler}>
				{events.map(event => (
					<Event {...event} key={event.id} />
				))}
			</div>
		</div>
	)
}

export default Day
