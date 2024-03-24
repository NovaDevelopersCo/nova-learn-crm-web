'use client'

import React, { FC, useCallback, useEffect, useState } from 'react'

import { Avatar, Button } from '@shared/ui'

import style from './Sidebar.module.scss'
import calendars from '/icons/calendars.png'
import dash from '/icons/dash.png'
import dot from '/icons/dot.png'
import events from '/icons/events.png'
import feedback from '/icons/feedback.png'
import files from '/icons/files.png'
import invoice from '/icons/invoice.png'
import knowledge from '/icons/knowledge.png'
import massage from '/icons/massage.png'
import people from '/icons/people.png'
import rightIcon from '/icons/rightIcon.png'
import settings from '/icons/settings.png'
import teams from '/icons/teams.png'

const Sidebar: FC = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true)

	const handleResize = useCallback(() => {
		const windowWidth = window.innerWidth
		const isNarrowScreen = windowWidth < 1025
		setIsSidebarVisible(!isNarrowScreen)
	}, [])

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [handleResize])

	return (
		<>
			<Button
				className={style.toggleBtn}
				onClick={() => setIsSidebarVisible(!isSidebarVisible)}
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
					<Avatar level={5} experience={100} image={''} />
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
		</>
	)
}

export default Sidebar
