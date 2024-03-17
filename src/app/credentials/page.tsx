'use client'
import React, { useState } from 'react';
import styles from './credentials.module.scss'; 

function Credentials() {
  const [data, setData] = useState([
    { id: 1, name: 'Русы против ящеров', course: 'React', email: 'yaroslave@gmail.cum', status: 'Оплачено' },
    { id: 2, name: 'Основы использования базы', course: 'JavaScript', email: 'ivan@example.com', status: 'Ожидание оплаты' }
  ]);

  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    setEditingIndex(-1);
  };

  const handleRemove = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wallet}>
        <div className={styles.amount}> Account overview</div>
        <div className={styles.amount}>$10.000</div>
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
                <td contentEditable={index === editingIndex} onBlur={(e) => handleSave(index)}>{item.name}</td>
                <td contentEditable={index === editingIndex} onBlur={(e) => handleSave(index)}>{item.course}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>
                  {index !== editingIndex ? (
                    <div className={styles.buttons}>
                      <button className={styles.editButton} onClick={() => handleEdit(index)}>Edit</button>
                      <button className={styles.removeButton} onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                  ) : (
                    <div className={styles.buttons}>
                      <button className={styles.editButton} onClick={() => handleSave(index)}>Save</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Credentials;
