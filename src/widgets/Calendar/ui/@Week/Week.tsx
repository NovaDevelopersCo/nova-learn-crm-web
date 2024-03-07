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
			className={`grid overflow-y-scroll h-max`}
			style={{
				gridTemplateRows: `repeat(${clocks.length + 1}, 1fr)`,
				gridTemplateColumns: '64px repeat(7, 1fr)'
			}}
		>
			<div className='grid grid-rows-subgrid grid-cols-subgrid col-span-1 row-span-full border border-solid border-[#F5F6F7]'>
				<div className='border-b sticky flex justify-center items-center'>
					<svg
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M14.99 5C9.47 5 5 9.48 5 15C5 20.52 9.47 25 14.99 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 14.99 5ZM15 23C10.58 23 7 19.42 7 15C7 10.58 10.58 7 15 7C19.42 7 23 10.58 23 15C23 19.42 19.42 23 15 23ZM14.78 10H14.72C14.32 10 14 10.32 14 10.72V15.44C14 15.79 14.18 16.12 14.49 16.3L18.64 18.79C18.98 18.99 19.42 18.89 19.62 18.55C19.83 18.21 19.72 17.76 19.37 17.56L15.5 15.26V10.72C15.5 10.32 15.18 10 14.78 10Z'
							fill='#C3CAD9'
						/>
					</svg>
				</div>
				{clocks.map((clock, index) => (
					<div
						key={index}
						className='text-[#ADB8CC] border-b flex justify-center items-center'
					>
						{clock}
					</div>
				))}
			</div>
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
		</div>
	)
}

export default Week
