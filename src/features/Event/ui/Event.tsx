import React, { useState } from 'react'

import { Button } from '@shared/ui'

import style from './Event.module.scss'
import Icon1 from '/public/icons/Icon1.png'
import Icon2 from '/public/icons/Icon2.png'
import Icon3 from '/public/icons/Icon3.png'
import Icon4 from '/public/icons/Icon4.png'
import Icon from '/public/icons/Icon.png'

const Event = () => {
	return (
		<div>
			<div className={style.label}>
				<Button
					icon={Icon.src}
					label='Add Place'
					className={style.icone}
				/>
				<Button
					icon={Icon1.src}
					label='Add Date'
					className={style.icone}
				/>
				<Button
					icon={Icon2.src}
					label='Add Members'
					className={style.icone}
				/>
				<Button
					icon={Icon3.src}
					label='Add Notes'
					className={style.icone}
				/>
				<Button
					icon={Icon4.src}
					label='Add Time'
					className={style.icone}
				/>
			</div>
		</div>
	)
}

export default Event
