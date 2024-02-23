import React from 'react'

import Image from 'next/image'

import style from './Avatar.module.scss'
import Vector from '/assets/Vector.png'

const Avatar = () => {
	return (
		<div className={style.user_profile}>
			<div className={style.avatar}>
				<Image src={Vector} alt='avatar' className={style.imgavatar} />
			</div>
			<h2>Hello Rosalie</h2>
			<h3>rosalie.rice@gmail.com</h3>
		</div>
	)
}

export default Avatar
