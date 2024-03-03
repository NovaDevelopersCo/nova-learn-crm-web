'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
    task: string;
}

interface TaskContextType {
    tasks: { [key: string]: Task };
    updateTask: (day: string, task: string, index: number) => void;
    deleteTask: (day: string, index: number) => void;
}

const TaskContext = createContext<TaskContextType>({
    tasks: {},
    updateTask: () => {},
    deleteTask: () => {}
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<{ [key: string]: Task }>({});

    const updateTask = (day: string, task: string, index: number) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [`${day}_${index}`]: { task: task }
        }));
    };

    const deleteTask = (day: string, index: number) => {
        const updatedTasks = { ...tasks };
        delete updatedTasks[`${day}_${index}`];
        setTasks(updatedTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};