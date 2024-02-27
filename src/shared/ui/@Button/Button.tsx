import { FC, HTMLAttributes } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import style from './Button.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	icon?: string
	label?: string
	rightIcon?: string
}

const Button: FC<ButtonProps> = ({
	icon,
	label,
	className,
	rightIcon,
	...props
}) => {
	return (
		<button className={clsx(style.Button, className)} {...props}>
			{icon && <Image src={icon} width={18} height={18} alt='icon' />}
			{label && <span>{label}</span>}
			{rightIcon && (
				<Image src={rightIcon} width={15} height={15} alt='rightIcon' />
			)}
		</button>
	)
}

export default Button
