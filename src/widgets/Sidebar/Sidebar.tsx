import React from 'react'

import dot from '/public/icons/dot.png'
import people from '/public/icons/people.png'
import calendars from '/public/icons/calendars.png'
import dash from '/public/icons/dash.png'
import invoice from '/public/icons/invoice.png'
import files from '/public/icons/files.png'
import events from '/public/icons/events.png'
import teams from '/public/icons/teams.png'
import massage from '/public/icons/massage.png'
import settings from '/public/icons/settings.png'

import { Avatar, Button } from '@shared/ui'

import style from './Sidebar.module.scss'

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
		</div>
	)
}

export default Sidebar
