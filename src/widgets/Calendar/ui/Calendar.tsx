'use client'

import React, { FC, useEffect, useState } from 'react'

import { Event } from '@features/Event'

import eventsData from '@/data/Calendar.json'


import { DateUtils } from '../lib/@utils'
import { IEvent } from '../model/@interfaces'
import Header from './@Header/Header'
import Week from './@Week/Week'
import styles from './Calendar.module.scss'

const Calendar: FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [events, setEvents] = useState<IEvent[]>([])

	useEffect(() => {
		setEvents(eventsData)
	}, [])

	useEffect(() => {
		// localStorage.setItem('events', JSON.stringify(events))
	}, [events])

	const goToNext = () => {
		const nextMon = DateUtils.WeekUtils.getNextWeekDays(selectedDate)[0]
		setSelectedDate(nextMon)
	}

	const goToPrev = () => {
		const prevMon = DateUtils.WeekUtils.getPrevWeekDays(selectedDate)[0]
		setSelectedDate(prevMon)
	}

	return (
		<section className={styles.calendar}>
			<Header
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				goToNext={goToNext}
				goToPrev={goToPrev}
			/>
			<Event />
			<Week date={selectedDate} events={events} />
		</section>
	)
}

export default Calendar
