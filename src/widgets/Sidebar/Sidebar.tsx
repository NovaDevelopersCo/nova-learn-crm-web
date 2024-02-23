import React from 'react'

import dot from 'icons/dot.png'
import people from 'icons/people.png'

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
					icon={people.src}
					label='Dashboard'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Calendars'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Invoice'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Files'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Events'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Teams'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Massage'
					className={style.customcluster}
				/>
				<Button
					icon={people.src}
					label='Settings'
					className={style.customcluster}
				/>
			</div>
		</div>
	)
}

export default Sidebar
