import React from 'react'

import { Avatar, Button } from '@shared/ui'

import style from './Sidebar.module.scss'
import Dashboard from '/public/icons/Dashboard.svg'
import calendars from '/public/icons/calendars.png'
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

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<div className={style.button}>
				<Button icon={people.src} className={style.customButton} />
				<Button icon={dot.src} className={style.customButton} />
			</div>
			<div className={style.avatar}>
				<Avatar />
			</div>
			<div className={style.clusterbtn}>
				<Button
					icon={Dashboard.src}
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
	)
}

export default Sidebar
