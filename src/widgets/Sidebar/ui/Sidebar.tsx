'use client'

import React, { FC, useEffect, useState } from 'react'

import { Avatar, Button } from '@shared/ui'

import style from './Sidebar.module.scss'
import calendars from '/public/icons/calendars.png'
import dash from '/public/icons/dash.png'
import dot from '/public/icons/dot.png'
import events from '/public/icons/events.png'
import feedback from '/public/icons/feedback.png'
import files from '/public/icons/files.png'
import invoice from '/public/icons/invoice.png'
import knowledge from '/public/icons/knowledge.png'
import massage from '/public/icons/massage.png'
import people from '/public/icons/people.png'
import rightIcon from '/public/icons/rightIcon.png'
import settings from '/public/icons/settings.png'
import teams from '/public/icons/teams.png'

const Sidebar: FC = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true)

	useEffect(() => {
		const setSidebarWidth = () => {
			const sidebar = document.querySelector<HTMLElement>(
				`.${style.sidebar}`
			)
			if (sidebar) {
				const windowWidth = window.innerWidth
				const isNarrowScreen = windowWidth < 1025
				sidebar.style.width = isNarrowScreen ? '100%' : '310px'
				setIsSidebarVisible(!isNarrowScreen)
			}
		}

		setSidebarWidth()
		window.addEventListener('resize', setSidebarWidth)

		return () => {
			window.removeEventListener('resize', setSidebarWidth)
		}
	}, [])

	const toggleSidebarVisibility = () => {
		setIsSidebarVisible(!isSidebarVisible)
	}

	return (
		<div>
			<Button
				className={style.toggleBtn}
				onClick={toggleSidebarVisibility}
				label={isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
			/>
			<div
				className={`${style.sidebar} ${isSidebarVisible ? style.visible : style.hidden}`}
			>
				<div className={style.button}>
					<Button icon={people.src} className={style.customButton} />
					<Button icon={dot.src} className={style.customButton} />
				</div>
				<div className={style.avatar}>
					<Avatar level={5} experience={100} />
				</div>
				<div className={style.clusterbtn}>
					<Button
						icon={dash.src}
						label='Dashboard'
						className={style.customcluster}
					/>
					<Button
						icon={calendars.src}
						label='Calendars'
						className={style.customcluster}
					/>
					<Button
						icon={invoice.src}
						label='Invoice'
						className={style.customcluster}
					/>
					<Button
						icon={files.src}
						label='Files'
						className={style.customcluster}
					/>
					<Button
						icon={events.src}
						label='Events'
						className={style.customcluster}
					/>
					<Button
						icon={teams.src}
						label='Teams'
						className={style.customcluster}
					/>
					<Button
						icon={massage.src}
						label='Massage'
						className={style.customcluster}
					/>
					<Button
						icon={settings.src}
						label='Settings'
						className={style.customcluster}
					/>
				</div>
				<div className={style.twobuton}>
					<Button
						icon={feedback.src}
						label='Send Feedback'
						className={style.twobtn}
						rightIcon={rightIcon.src}
					/>
					<Button
						icon={knowledge.src}
						label='Knowledge Base'
						className={style.twobtn}
						rightIcon={rightIcon.src}
					/>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
