import React from 'react'

import Image from 'next/image'

import style from './Avatar.module.scss'

type IAvatarProps = {
	level: number
	experience: number
	image: string
}

const Avatar: React.FC<IAvatarProps> = ({ level, experience, image }) => {
	const formattedLevel = Math.min(Math.max(level, 0), 100)
	const formattedExperience = Math.min(Math.max(experience, 0), 100)

	return (
		<div className={style.user_profile}>
			<div className={style.avatarContainer}>
				<div className={style.avatarWrapper}>
					<div className={style.avatar}>
						<Image
							src={image}
							alt='avatar'
							className={`${style.img} ${style.avatar_image}`}
						/>
					</div>
					<div className={style.levelBarContainer}>
						<div
							className={style.levelBar}
							style={{ width: `${formattedExperience}%` }}
						></div>
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
