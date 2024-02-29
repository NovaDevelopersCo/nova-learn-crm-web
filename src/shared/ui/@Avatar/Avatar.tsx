import React from 'react'

import Image from 'next/image'

import style from './Avatar.module.scss'
import Vector from '/public/assets/Vector.png'

interface AvatarProps {
	level: number
	experience: number // Принимаем уровень с бэкэнда в качестве пропса
}

const Avatar: React.FC<AvatarProps> = ({ level, experience }) => {
	// Предполагаем, что level находится в диапазоне от 0 до 100
	const formattedLevel = Math.min(Math.max(level, 0), 100)
	const formattedExperience = Math.min(Math.max(experience, 0), 100)

	return (
		<div className={style.user_profile}>
			<div className={style.avatarContainer}>
				<div className={style.avatarWrapper}>
					<div className={style.avatar}>
						<Image
							src={Vector}
							alt='avatar'
							className={`${style.img} ${style.avatar_image}`}
						/>
					</div>
					<div className={style.levelBarContainer}>
						<progress
							className={style.levelBar}
							style={{ width: `${formattedExperience}%` }}
						></progress>
						<div className={style.levelCircle}>
							{formattedLevel}
						</div>
					</div>
				</div>
			</div>
			<h2>Hello Rosalie</h2>
			<h3>rosalie.rice@gmail.com</h3>
		</div>
	)
}

export default Avatar
