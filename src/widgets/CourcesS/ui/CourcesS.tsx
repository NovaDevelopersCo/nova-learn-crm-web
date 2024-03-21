'use client'

import React, { useState } from 'react';
import styles from './CourcesS.module.scss';

const Cources = () => {
  const [searchText, setSearchText] = useState('');
  const [courses, setCourses] = useState([
    { name: 'Course 1', instructor: 'Instructor 1', department: 'Department 1', semester: 'Spring' },
    { name: 'Course 2', instructor: 'Instructor 2', department: 'Department 2', semester: 'Fall' },
    { name: 'Course 3', instructor: 'Instructor 3', department: 'Department 1', semester: 'Summer' },
    { name: 'Course 4', instructor: 'Instructor 4', department: 'Department 3', semester: 'Fall' },
  ]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Фильтрация курсов по поисковому запросу
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.cources}>
      <h2 className={styles.courcesTitle}>Course Catalog</h2>
      <div className={styles.searchContainer}>
        <label className={styles.searchLabel} htmlFor="searchInput">Search Course:</label>
        <input
          type="text"
          id="searchInput"
          className={styles.searchInput}
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className={styles.tableHeader}>
        <p className={styles.tableHeader1}>Course Name</p>
        <p className={styles.tableHeader1}>Instructor</p>
        <p className={styles.tableHeader1}>Department</p>
        <p className={styles.tableHeader1}>Semester</p>
      </div>
      {/* Отображение списка курсов под каждым заголовком */}
      {filteredCourses.map((course, index) => (
        <div className={styles.courseRow} key={index}>
          <p>{course.name}</p>
          <p>{course.instructor}</p>
          <p>{course.department}</p>
          <p>{course.semester}</p>
        </div>
      ))}
    </div>
  );
}

export default Cources;