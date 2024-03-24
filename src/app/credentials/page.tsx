'use client'

import React, { useState } from 'react'

import styles from './credentials.module.scss'

interface CredentialsProps {
	moneyData?: string
	listData?: {
		id: number
		name: string
		course: string
		email: string
		status: string
	}[]
}

function Credentials({ moneyData, listData }: CredentialsProps) {
	const [data, setData] = useState(listData || [])
	const [editingIndex, setEditingIndex] = useState(-1)

	const handleEdit = (index: number) => {
		setEditingIndex(index)
	}

	const handleSave = (index: number) => {
		setEditingIndex(-1)
	}

	const handleRemove = (index: number) => {
		setData(prevData => prevData.filter((_, i) => i !== index))
	}

	return (
		<div className={styles.container}>
			<div className={styles.wallet}>
				<div className={styles.amount}> Account overview</div>
				{moneyData ? (
					<div className={styles.amount}>{moneyData}</div>
				) : (
					<div className={styles.amount}>Тест</div>
				)}
				<div className={styles.updateTime}>Last updated just now</div>
			</div>
			<div className={styles.courses}>
				<h2>Купленные занятия</h2>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Имя</th>
							<th>Курс</th>
							<th>Email</th>
							<th>Статус</th>
							<th>Действия</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td
									contentEditable={index === editingIndex}
									onBlur={e => handleSave(index)}
								>
									{item.name}
								</td>
								<td
									contentEditable={index === editingIndex}
									onBlur={e => handleSave(index)}
								>
									{item.course}
								</td>
								<td>{item.email}</td>
								<td>{item.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Credentials
