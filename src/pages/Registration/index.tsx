import React from 'react'
import style from './registration.module.scss'
import { Button } from '@shared/ui'

const Registration = () => {
  return (
    <div className={style.registration}>
        <div className={style.reg_title}>
            <h2>Registration for CRM</h2>
            <p>Fill in your information to get started.</p>
        </div>
        <div className={style.form_container}>
            <form action="" className={style.form}>
                <label className={style.label}>Name</label>
                <input type="text" className={style.input} />
                <label className={style.label}>Email</label>
                <input type="email" className={style.input} />
                <label className={style.label}>Password</label>
                <input type="password" className={style.input} />
                <label className={style.label}>Phone Number</label>
                <input type="phone" className={style.input} />
                <label htmlFor="privacyCheckbox" className={style.checkbox_label}>
                  <input type="checkbox" id="privacyCheckbox" className={style.checkbox} />
                  I agree to the Terms of Service and Privacy Policy
                </label>
                
            </form>
            <div className={style.btnregdiv}>
                <Button label='Create account' className="bg-black w-24" />
            </div>
        </div>
    </div>
  )
}

export default Registration