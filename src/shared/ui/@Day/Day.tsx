'use clients'

import React, { useState } from 'react'

import styles from './Day.module.scss'

interface Task {
	task: string
	borderStyle: string
	borderColor: string
}

interface DayProps {
	dayName: string
	dayOfMonth: number
	tasks: { [key: string]: Task }
	updateTask: (day: string, task: string, index: number) => void
	deleteTask: (day: string, index: number) => void
	borderColor: string
}

const Day: React.FC<DayProps> = ({
	dayName,
	dayOfMonth,
	tasks,
	updateTask,
	deleteTask,
	borderColor
}) => {
	const [taskCount, setTaskCount] = useState(1)
	const maxTasks = 6

	const handleInputChange = (task: string, index: number) => {
		updateTask(dayName, task, index)
	}

	const handleDeleteTask = (index: number) => {
		deleteTask(dayName, index)
		setTaskCount(taskCount - 1) // Уменьшаем счетчик задач при удалении
	}

	const renderTaskInputs = () => {
		const taskInputs = []
		for (let i = 1; i <= taskCount; i++) {
			const taskKey = `${dayName}_${i}`
			taskInputs.push(
				<div key={i}>
					<input
						type='text'
						value={tasks[taskKey] ? tasks[taskKey].task : ''}
						onChange={e => handleInputChange(e.target.value, i)}
						placeholder='Enter task name'
						className={styles.inputTask} // Применяем класс стиля
						style={{
							border: tasks[taskKey]
								? tasks[taskKey].borderStyle
								: `1px solid ${borderColor}`
						}}
					/>
					<button onClick={() => handleDeleteTask(i)}>
						Delete Task
					</button>
				</div>
			)
		}
		return taskInputs
	}

	const addTaskInput = () => {
		if (taskCount < maxTasks) {
			setTaskCount(taskCount + 1)
		} else {
			alert('Maximum number of tasks reached!')
		}
	}

	return (
		<div className={styles.dayCell}>
			<div className={styles.dayName}>
				{dayName} {dayOfMonth}
			</div>
			{renderTaskInputs()}
			<button onClick={addTaskInput}>Add Task</button>
		</div>
	)
}

export default Day
