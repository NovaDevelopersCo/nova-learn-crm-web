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
			<div className={style.input}>
				<div className={style.inputWithIcon}>
					<input
						type='text'
						placeholder='Add Place'
						className={style.icone}
					/>
					<img
						src={Icon.src}
						alt='Icon'
						className={style.inputIcon}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<input
						type='text'
						placeholder='Add Date'
						className={style.icone}
					/>
					<img
						src={Icon1.src}
						alt='Icon1'
						className={style.inputIcon}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<input
						type='text'
						placeholder='Add Members'
						className={style.icone}
					/>
					<img
						src={Icon2.src}
						alt='Icon2'
						className={style.inputIcon}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<input
						type='text'
						placeholder='Add Notes'
						className={style.icone}
					/>
					<img
						src={Icon3.src}
						alt='Icon3'
						className={style.inputIcon}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<input
						type='text'
						placeholder='Add Time'
						className={style.icone}
					/>
					<img
						src={Icon4.src}
						alt='Icon4'
						className={style.inputIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Event
