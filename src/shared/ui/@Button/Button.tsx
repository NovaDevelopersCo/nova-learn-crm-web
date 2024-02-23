import React from 'react'

import style from './Button.module.scss'

interface ButtonProps {
	icon?: string
	label?: string
	className?: string
}

const Button: React.FC<ButtonProps> = ({ icon, label, className }) => {
	return (
		<button className={`${style.Button} ${className}`}>
			{icon && <img src={icon} alt='icon' />}
			{label && <span>{label}</span>}
		</button>
	)
}

export default Button
