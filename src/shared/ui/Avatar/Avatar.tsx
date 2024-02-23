import React from 'react'
import style from './Avatar.module.scss'
import Vector from '../../../../public/Vector.png'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className={style.user_profile}>
      <div className={style.avatar}>
        <Image 
        src={Vector} 
        alt="avatar" />
      </div>
      <h2>Hello Rosalie</h2>
      <h3>rosalie.rice@gmail.com</h3>
    </div>
  )
}

export default Avatar