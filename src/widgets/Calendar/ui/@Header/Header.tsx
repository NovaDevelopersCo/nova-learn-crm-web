import React, { Dispatch, FC, SetStateAction } from 'react'

import { DateUtils } from '../../lib/@utils'
import styles from './Header.module.scss'

type TCalendarHeaderProps = {
	goToNext: () => void
	goToPrev: () => void
	selectedDate: Date
	setSelectedDate: Dispatch<SetStateAction<Date>>
}

const Header: FC<TCalendarHeaderProps> = ({
	goToNext,
	goToPrev,
	selectedDate,
	setSelectedDate
}) => {
	const goToToday = () => {
		setSelectedDate(new Date())
	}

	return (
		<header className={styles.header}>
			<button onClick={goToToday} className={styles.btn}>
				Today
			</button>
			<div className='flex flex-row gap-10 items-center'>
				<button onClick={goToPrev} className={styles.btn}>
					{'<'}
				</button>
				<div className='text-center text-xs font-bold leading-[20px] text-[#6b7a99]'>
					{DateUtils.DateConverters.weekRangeConverter(selectedDate)}
				</div>
				<button onClick={goToNext} className={styles.btn}>
					{'>'}
				</button>
			</div>
			<div className='flex flex-row items-center'>
				<div className={styles.btn_left}>
					<input
						type='radio'
						id='day'
						name='view'
						value='day'
						disabled
					/>
					<label htmlFor='day'>Day</label>
				</div>
				<div className={styles.btn_center}>
					<input
						type='radio'
						id='week'
						name='view'
						value='week'
						defaultChecked
					/>
					<label htmlFor='week'>Week</label>
				</div>
				<div className={styles.btn_center}>
					<input
						type='radio'
						id='month'
						name='view'
						value='month'
						disabled
					/>
					<label htmlFor='month'>Month</label>
				</div>
				<div className={styles.btn_right}>
					<input
						type='radio'
						id='year'
						name='view'
						value='year'
						disabled
					/>
					<label htmlFor='year'>Year</label>
				</div>
			</div>
		</header>
	)
}

export default Header
