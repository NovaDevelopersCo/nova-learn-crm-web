"use  client"

import React, { useEffect, useState } from 'react'

import styles from './Calendar.module.scss'

const Calendar: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [tasks, setTasks] = useState<{ [key: string]: string }>({})

	useEffect(() => {
		const savedTasks = localStorage.getItem('tasks')
		if (savedTasks) {
			setTasks(JSON.parse(savedTasks))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const updateTask = (day: string, task: string) => {
		setTasks(prevTasks => ({
			...prevTasks,
			[day]: task
		}))
	}

	const handleAddTask = () => {
		if (newTaskName.trim() !== '') {
			setTasks(prevTasks => ({
				...prevTasks,
				[getDayName(selectedDate)]: newTaskName
			}))
			setNewTaskName('')
		}
	}

	const goToToday = () => {
		setSelectedDate(new Date())
	}

	const goToPreviousWeek = () => {
		const previousWeek = new Date(selectedDate)
		previousWeek.setDate(selectedDate.getDate() - 7)
		setSelectedDate(previousWeek)
	}

	const goToNextWeek = () => {
		const nextWeek = new Date(selectedDate)
		nextWeek.setDate(selectedDate.getDate() + 7)
		setSelectedDate(nextWeek)
	}

	const getDayName = (date: Date) => {
		return [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		][date.getDay()]
	}

	const [newTaskName, setNewTaskName] = useState<string>('')

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<button onClick={goToPreviousWeek}>Previous Week</button>
				</div>
				<div>
					<button onClick={goToToday}>Today</button>
				</div>
				<div>
					<button onClick={goToNextWeek}>Next Week</button>
				</div>
				<div>{selectedDate.toLocaleDateString()}</div>
				<div>
					<input
						type='text'
						value={newTaskName}
						onChange={e => setNewTaskName(e.target.value)}
						placeholder='Enter task name'
					/>
					<button onClick={handleAddTask}>Add Task</button>
				</div>
			</header>
			<div className={styles.days}>
				{Array.from({ length: 7 }).map((_, index) => {
					const currentDate = new Date(selectedDate)
					currentDate.setDate(currentDate.getDate() + index)
					const dayName = getDayName(currentDate)
					return (
						<div key={dayName}>
							<div>{dayName}</div>
							<div>
								<input
									type='text'
									value={tasks[dayName] || ''}
									onChange={e =>
										updateTask(dayName, e.target.value)
									}
								/>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar
