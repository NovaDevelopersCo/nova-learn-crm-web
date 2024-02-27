import React from 'react'

import style from './Button.module.scss'

interface ButtonProps {
	icon?: string
	label?: string
	className?: string
	rightIcon?: string
}

const Button: React.FC<ButtonProps> = ({ icon, label, className, rightIcon }) => {
	return (
		<button className={`${style.Button} ${className}`}>
			{icon && <img src={icon} alt='icon' />}
			{label && <span>{label}</span>}
			{rightIcon && <img src={rightIcon} alt='rightIcon'/>}
		</button>
	)
}

export default Button
