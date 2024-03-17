'use client'

import React, { useState } from 'react'

import style from './Registrationwid.module.scss'

const Registrationwid = () => {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [agreedToTerms, setAgreedToTerms] = useState(false)

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = event.target
		const newValue = type === 'checkbox' ? checked.toString() : value
		switch (name) {
			case 'fullName':
				setFullName(newValue)
				break
			case 'email':
				setEmail(newValue)
				break
			case 'password':
				setPassword(newValue)
				break
			case 'phoneNumber':
				setPhoneNumber(newValue)
				break
			case 'agreedToTerms':
				setAgreedToTerms(
					typeof newValue === 'string'
						? newValue === 'true'
						: newValue
				)
				break
			default:
				break
		}
	}

	const handleSubmit = () => {
		const formData = {
			fullName: fullName,
			email: email,
			password: password,
			phoneNumber: phoneNumber,
			agreedToTerms: agreedToTerms
		}
		console.log(formData)
	}

	return (
		<div className={style.registration}>
			<div className={style.reg_title}>
				<h2>Registration for CRM</h2>
				<p>Fill in your information to get started.</p>
			</div>
			<div className={style.form_container}>
				<form action='' className={style.form}>
					<label className={style.label}>Full Name</label>
					<input
						type='text'
						name='fullName'
						className={style.input}
						value={fullName}
						onChange={handleInputChange}
					/>
					<label className={style.label}>Email Address</label>
					<input
						type='email'
						name='email'
						className={style.input}
						value={email}
						onChange={handleInputChange}
					/>
					<label className={style.label}>Password</label>
					<div className={style.show_hide_password}>
						<input
							type={passwordVisible ? 'text' : 'password'}
							name='password'
							className={style.input}
							value={password}
							onChange={handleInputChange}
						/>
						<button
							className={style.show_hide_button}
							onClick={togglePasswordVisibility}
							type='button'
						>
							{passwordVisible ? 'Hide' : 'Show'}
						</button>
					</div>
					<label className={style.label}>Phone Number</label>
					<input
						type='phone'
						name='phoneNumber'
						className={style.input}
						value={phoneNumber}
						onChange={handleInputChange}
					/>
					<label
						htmlFor='privacyCheckbox'
						className={style.checkbox_label}
					>
						<input
							type='checkbox'
							name='agreedToTerms'
							id='privacyCheckbox'
							className={style.checkbox}
							onChange={handleInputChange}
						/>
						I agree to the Terms of Service and Privacy Policy
					</label>
				</form>
				<div className={style.btnregdiv}>
					<button className={style.btnreg} onClick={handleSubmit}>
						<span>Create Account</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Registrationwid
