import React from 'react'

import styles from './Calendar.module.sass'

const Calendar: React.FC = () => {
	const TaskAndMeetList: React.FC = () => {
		return (
			<div className={styles.taskMeetList}>
				{/* Здесь будут отображаться задачи и встречи */}
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>Today</div>
				<div>{new Date().toLocaleDateString()}</div>
				<div>
					<select className={styles.select}>
						<option>Week</option>
						<option>Month</option>
						<option>Year</option>
					</select>
				</div>
			</header>
			<div className={styles.days}>
				<div>Monday</div>
				<div>Tuesday</div>
				<div>Wednesday</div>
				<div>Thursday</div>
				<div>Friday</div>
				<div>Saturday</div>
				<div>Sunday</div>
			</div>
			<main>
				<TaskAndMeetList />
			</main>
		</div>
	)
}

export default Calendar
