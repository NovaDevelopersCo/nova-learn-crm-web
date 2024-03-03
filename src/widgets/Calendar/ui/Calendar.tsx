'use client'

import React, { useEffect, useState } from 'react'

import { Day } from '@shared/ui'

import styles from './Calendar.module.scss'

interface Task {
	task: string
	additionalInfo: string
	borderStyle: string
	borderColor: string
}

const Calendar: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [tasks, setTasks] = useState<{ [key: string]: Task }>({})
	const [borderColor, setBorderColor] = useState<string>('#000000')

	useEffect(() => {
		const savedTasks = localStorage.getItem('tasks')
		if (savedTasks) {
			setTasks(JSON.parse(savedTasks))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const updateTask = (
		day: string,
		task: string,
		additionalInfo: string,
		taskId: number
	) => {
		const taskKey = `${day}_${taskId}`
		setTasks(prevTasks => ({
			...prevTasks,
			[taskKey]: {
				task: task,
				additionalInfo: additionalInfo,
				borderStyle: `1px solid ${borderColor}`,
				borderColor: borderColor
			}
		}))
	}

	const deleteTask = (day: string, taskId: number) => {
		const updatedTasks = { ...tasks }
		delete updatedTasks[`${day}_${taskId}`]
		setTasks(updatedTasks)
	}

	const handleBorderColorChange = (color: string) => {
		setBorderColor(color)
	}

	const goToNextWeek = () => {
		const nextWeek = new Date(selectedDate)
		nextWeek.setDate(selectedDate.getDate() + 7)
		setSelectedDate(nextWeek)
	}

	const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const monthIndex = parseInt(event.target.value)
		const newSelectedDate = new Date(
			selectedDate.getFullYear(),
			monthIndex,
			1
		)
		setSelectedDate(newSelectedDate)
	}

	const goToToday = () => {
		setSelectedDate(new Date())
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<button onClick={goToNextWeek} className={styles.button}>
						Next Week
					</button>
					<button onClick={goToToday} className={styles.button}>
						Today
					</button>
				</div>
				<div>{selectedDate.toLocaleDateString()}</div>
				<div>
					<input
						type='color'
						value={borderColor}
						onChange={e => handleBorderColorChange(e.target.value)}
						className={styles.inputColor}
					/>
				</div>
				<div>
					<select
						onChange={handleMonthChange}
						value={selectedDate.getMonth()}
						className={styles.select}
					>
						<option value={0}>January</option>
						<option value={1}>February</option>
						<option value={2}>March</option>
						<option value={3}>April</option>
						<option value={4}>May</option>
						<option value={5}>June</option>
						<option value={6}>July</option>
						<option value={7}>August</option>
						<option value={8}>September</option>
						<option value={9}>October</option>
						<option value={10}>November</option>
						<option value={11}>December</option>
					</select>
				</div>
			</header>
			<div className={styles.days}>
				{[
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday'
				].map((dayName, index) => (
					<Day
						key={dayName}
						dayName={dayName}
						dayOfMonth={(selectedDate.getDate() + index) % 31 || 31}
						tasks={tasks}
						updateTask={(day, task, additionalInfo, taskId) =>
							updateTask(day, task, additionalInfo, taskId)
						}
						deleteTask={(day, taskId) => deleteTask(day, taskId)}
						borderColor={borderColor}
					/>
				))}
			</div>
		</div>
	)
}

export default Calendar
