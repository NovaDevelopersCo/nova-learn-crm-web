import React from 'react'
import style from './Sidebar.module.scss'
import Button from '@shared/ui/Button/Button'
import Avatar from '@shared/ui/Avatar/Avatar'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.button}>
        <Button/>
        <Button/>
      </div>
      <div className={style.avatar}>
        <Avatar/>
      </div>
    </div>
  )
}

export default Sidebar