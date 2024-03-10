"use client"

import React, { useState } from 'react'
import style from './Registrationwid.module.scss'

const Registrationwid = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    <div className={style.registration}>
			<div className={style.reg_title}>
				<h2>Registration for CRM</h2>
				<p>Fill in your information to get started.</p>
			</div>
			<div className={style.form_container}>
				<form action='' className={style.form}>
					<label className={style.label}>Full Name</label>
					<input type='text' className={style.input} />
					<label className={style.label}>Email Address</label>
					<input type='email' className={style.input} />
					<label className={style.label}>Password</label>
                    <div className={style.show_hide_password}>
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className={style.input}
                      />
                      <button
                        className={style.show_hide_button}
                        onClick={togglePasswordVisibility}
                        type="button"
                      >
                        {passwordVisible ? 'Hide' : 'Show'}
                      </button>
                    </div>
					<label className={style.label}>Phone Number</label>
					<input type='phone' className={style.input} />
					<label
						htmlFor='privacyCheckbox'
						className={style.checkbox_label}
					>
						<input
							type='checkbox'
							id='privacyCheckbox'
							className={style.checkbox}
						/>
						I agree to the Terms of Service and Privacy Policy
					</label>
				</form>
				<div className={style.btnregdiv}>
					<button className={style.btnreg}>
                        <span>Create Account</span>
                    </button>
				</div>
			</div>
		</div>
  )
}

export default Registrationwid