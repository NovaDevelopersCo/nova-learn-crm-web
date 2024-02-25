import { FC, HTMLAttributes } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import style from './Button.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	icon?: string
	label?: string
}

const Button: FC<ButtonProps> = ({ icon, label, className, ...props }) => {
	return (
		<button className={clsx(style.Button, className)} {...props}>
			{icon && <Image src={icon} alt='icon' />}
			{label && <span>{label}</span>}
		</button>
	)
}

export default Button
