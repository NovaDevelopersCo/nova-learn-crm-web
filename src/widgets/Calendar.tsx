'use client'

import React, { useEffect, useState } from 'react'

// Путь к утилите для форматирования даты
import { useRouter } from 'next/router'
import { formatDate } from '../utils/dateUtils'

const Calendar: React.FC = () => {
	const router = useRouter()
	const [selectedDate, setSelectedDate] = useState(new Date())

	useEffect(() => {
		// Парсим параметры из URL, если они есть
		const { date } = router.query
		if (date) {
			const parsedDate = new Date(date as string)
			if (!isNaN(parsedDate.getTime())) {
				setSelectedDate(parsedDate)
			}
		}
	}, [router.query])

	const handlePrevWeek = () => {
		const prevWeek = new Date(selectedDate)
		prevWeek.setDate(prevWeek.getDate() - 7)
		setSelectedDate(prevWeek)
		router.push(`/?date=${formatDate(prevWeek)}`)
	}

	const handleNextWeek = () => {
		const nextWeek = new Date(selectedDate)
		nextWeek.setDate(nextWeek.getDate() + 7)
		setSelectedDate(nextWeek)
		router.push(`/?date=${formatDate(nextWeek)}`)
	}

	const handleToday = () => {
		setSelectedDate(new Date())
		router.push(`/?date=${formatDate(new Date())}`)
	}

	return (
		<div>
			<div>
				<button onClick={handleToday}>Today</button>
				<button onClick={handlePrevWeek}>Previous Week</button>
				<button onClick={handleNextWeek}>Next Week</button>
			</div>
			<div>{formatDate(selectedDate)}</div>
			{/* Здесь ваша логика для отображения календаря */}
		</div>
	)
}

export default Calendar
