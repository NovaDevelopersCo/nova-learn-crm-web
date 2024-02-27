'use client'

import React, { useEffect, useState } from 'react'

import styles from './Calendar.module.scss'

const Calendar: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [tasks, setTasks] = useState<{
		[key: string]: {
			task: string
			borderStyle: string
			borderColor: string
		}
	}>({})
	const [newTaskName, setNewTaskName] = useState<string>('')
	const [selectedBorderStyle, setSelectedBorderStyle] =
		useState<string>('1px solid black')
	const [selectedBorderColor, setSelectedBorderColor] =
		useState<string>('#000000')

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
		index: number,
		borderStyle: string,
		borderColor: string
	) => {
		setTasks(prevTasks => ({
			...prevTasks,
			[`${day}_${index}`]: {
				task: task,
				borderStyle: borderStyle,
				borderColor: borderColor
			}
		}))
	}

	const handleBorderStyleChange = (borderStyle: string) => {
		setSelectedBorderStyle(borderStyle)
	}

	const handleBorderColorChange = (color: string) => {
		setSelectedBorderColor(color)
	}

	const handleAddTask = (day: string, index: number) => {
		if (newTaskName.trim() !== '') {
			updateTask(
				day,
				newTaskName,
				index,
				selectedBorderStyle,
				selectedBorderColor
			)
			setNewTaskName('')
			setSelectedBorderStyle('1px solid black') // Сброс стиля рамки после добавления задачи
			setSelectedBorderColor('#000000') // Сброс цвета рамки после добавления задачи
		}
	}

	const goToToday = () => {
		setSelectedDate(new Date())
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

	const getDayName = (date: Date) => {
		return [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		][date.getDay()]
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<button onClick={goToToday} className={styles.button}>
						Today
					</button>
				</div>
				<div>
					<button onClick={goToNextWeek} className={styles.button}>
						Next Week
					</button>
				</div>
				<div>{selectedDate.toLocaleDateString()}</div>
				<div>
					<input
						type='text'
						value={newTaskName}
						onChange={e => setNewTaskName(e.target.value)}
						placeholder='Enter task name'
						className={styles.input}
					/>
					<select
						value={selectedBorderStyle}
						onChange={e => handleBorderStyleChange(e.target.value)}
						className={styles.selectBorderStyle}
					>
						<option value='1px solid black'>Solid</option>
						<option value='2px dashed black'>Dashed</option>
						<option value='2px dotted black'>Dotted</option>
					</select>
					<input
						type='color'
						value={selectedBorderColor}
						onChange={e => handleBorderColorChange(e.target.value)}
						className={styles.inputColor}
					/>
					<button
						onClick={() =>
							handleAddTask(getDayName(selectedDate), 1)
						}
						className={styles.button}
					>
						Add Task
					</button>
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
				].map(dayName => (
					<div key={dayName} className={styles.dayCell}>
						<div className={styles.dayName}>{dayName}</div>
						<div>
							<input
								type='text'
								value={
									tasks[`${dayName}_1`]
										? tasks[`${dayName}_1`].task
										: ''
								}
								onChange={e =>
									updateTask(
										dayName,
										e.target.value,
										1,
										selectedBorderStyle,
										selectedBorderColor
									)
								}
								placeholder='Enter task name'
								className={styles.inputTask}
								style={{
									border: tasks[`${dayName}_1`]
										? tasks[`${dayName}_1`].borderStyle
										: '1px solid black'
								}}
							/>
						</div>
						{[2, 3, 4, 5, 6].map(index => (
							<div key={index}>
								<input
									type='text'
									value={
										tasks[`${dayName}_${index}`]
											? tasks[`${dayName}_${index}`].task
											: ''
									}
									onChange={e =>
										updateTask(
											dayName,
											e.target.value,
											index,
											selectedBorderStyle,
											selectedBorderColor
										)
									}
									placeholder='Enter task name'
									className={styles.inputTask}
									style={{
										border: tasks[`${dayName}_${index}`]
											? tasks[`${dayName}_${index}`]
													.borderStyle
											: '1px solid black'
									}}
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Calendar
