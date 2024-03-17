import React, { useState } from 'react'

import style from './Event.module.scss'
import Icon1 from '/public/icons/Icon1.png'
import Icon2 from '/public/icons/Icon2.png'
import Icon3 from '/public/icons/Icon3.png'
import Icon4 from '/public/icons/Icon4.png'
import Icon from '/public/icons/Icon.png'

const Event = () => {
	const [selectedColor, setSelectedColor] = useState('#008000')
	const [isColorSelectorOpen, setColorSelectorOpen] = useState(false)
	const [inputsData, setInputsData] = useState({
		place: '',
		date: '',
		members: '',
		notes: '',
		time: ''
	})

	const toggleColorSelector = () => {
		setColorSelectorOpen(!isColorSelectorOpen)
	}

	const handleColorChange = (color: string) => {
		setSelectedColor(color)
		setColorSelectorOpen(false) // Закрываем селектор цветов после выбора цвета
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: string
	) => {
		setInputsData({
			...inputsData,
			[field]: e.target.value
		})
	}

	const colors = ['#008000', '#800080', '#0000FF', '#FF0000', '#FFFF00']

	return (
		<div className={style.inputtext}>
			<div className={style.eventTitle}>Event Title</div>
			<div className={style.colorSelectorContainer}>
				<div
					className={style.colorSelectorTrigger}
					onClick={toggleColorSelector}
				>
					<div
						className={style.selectedColor}
						style={{ backgroundColor: selectedColor }}
					></div>
					<div
						className={style.arrow}
						style={{
							transform: isColorSelectorOpen
								? 'rotate(0deg)'
								: 'rotate(180deg)'
						}}
					></div>
				</div>
				{isColorSelectorOpen && (
					<div className={style.colorSelector}>
						{colors.map((color, index) => (
							<div
								key={index}
								className={style.colorOption}
								style={{ backgroundColor: color }}
								onClick={() => handleColorChange(color)}
							></div>
						))}
					</div>
				)}
			</div>
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
						value={inputsData.place}
						onChange={e => handleInputChange(e, 'place')}
					/>
				</div>
				<div className={style.inputWithIcon}>
					<img
						src={Icon1.src}
						alt='Icon1'
						className={style.inputIcon}
					/>
					<input
						type='date'
						placeholder='Add Date'
						className={style.icone}
						value={inputsData.date}
						onChange={e => handleInputChange(e, 'date')}
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
						value={inputsData.members}
						onChange={e => handleInputChange(e, 'members')}
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
						value={inputsData.notes}
						onChange={e => handleInputChange(e, 'notes')}
					/>
				</div>
			</div>
			<div
				className={style.inputWithIcon}
				style={{ marginLeft: '-10px' }}
			>
				<input
					type='time'
					placeholder='Add Time'
					className={style.icone}
					value={inputsData.time}
					onChange={e => handleInputChange(e, 'time')}
				/>
				<img src={Icon4.src} alt='Icon4' className={style.inputIcon} />
			</div>
		</div>
	)
}

export default Event
