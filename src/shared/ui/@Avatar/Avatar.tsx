import React from 'react'

import Image from 'next/image'

import style from './Avatar.module.scss'
import Vector from '/public/assets/Vector.png'

const Avatar = () => {
	return (
		<div className={style.user_profile}>
			<div className={style.avatar}>
				<div className={style.avatarImage}>
					<Image
						src={Vector}
						alt='avatar'
						className={`${style.img} ${style.avatar_image}`}
					/>
				</div>
			</div>
			<h2>Hello Rosalie</h2>
			<h3>rosalie.rice@gmail.com</h3>
		</div>
	)
}

export default Avatar
