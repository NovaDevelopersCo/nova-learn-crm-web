import React, { useState } from 'react'

import { Button } from '@shared/ui'

import style from './Event.module.scss'
import Icon1 from '/public/icons/Icon1.png'
import Icon2 from '/public/icons/Icon2.png'
import Icon3 from '/public/icons/Icon3.png'
import Icon4 from '/public/icons/Icon4.png'
import Icon from '/public/icons/Icon.png'

const Event = () => {
	const [isColorSelectorOpen, setColorSelectorOpen] = useState(false)
	const [selectedColor, setSelectedColor] = useState('#008000')

	const toggleColorSelector = () => {
		setColorSelectorOpen(!isColorSelectorOpen)
	}

	const handleColorChange = event => {
		setSelectedColor(event.target.value)
	}

	return (
		<div className={style.inputtext}>
			<div className={style.eventTitle}>Event Title</div>
			<div className={style.colorSelectorContainer}>
				<div
					className={style.colorSelectorTrigger}
					onClick={toggleColorSelector}
				>
					Color Selector
				</div>
				{isColorSelectorOpen && (
					<div className={style.colorSelector}>
						<input
							type='color'
							value={selectedColor}
							onChange={handleColorChange}
						/>
						<input
							type='color'
							value='#800080'
							onChange={handleColorChange}
						/>
						<input
							type='color'
							value='#0000FF'
							onChange={handleColorChange}
						/>
						<input
							type='color'
							value='#FF0000'
							onChange={handleColorChange}
						/>
						<input
							type='color'
							value='#FFFF00'
							onChange={handleColorChange}
						/>
					</div>
				)}
			</div>
			<div
				className={style.selectedColor}
				style={{ backgroundColor: selectedColor }}
			></div>
			<div className={style.inputContainer}>
				<div className={style.inputWithIcon}>
					<img
						src={Icon.src}
						alt='Icon'
						className={style.inputIcon}
					/>
					<input
						type='text'
						placeholder='Add Place'
						className={style.icone}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<img
						src={Icon1.src}
						alt='Icon1'
						className={style.inputIcon}
					/>
					<input
						type='text'
						placeholder='Add Date'
						className={style.icone}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<img
						src={Icon2.src}
						alt='Icon2'
						className={style.inputIcon}
					/>
					<input
						type='text'
						placeholder='Add Members'
						className={style.icone}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<img
						src={Icon3.src}
						alt='Icon3'
						className={style.inputIcon}
					/>
					<input
						type='text'
						placeholder='Add Notes'
						className={style.icone}
					/>
				</div>
			</div>
			<div
				className={style.inputWithIcon}
				style={{ marginLeft: '-10px' }}
			>
				<input
					type='text'
					placeholder='Add Time'
					className={style.icone}
				/>
				<img src={Icon4.src} alt='Icon4' className={style.inputIcon} />
			</div>
		</div>
	)
}

export default Event
