import React from 'react';
import { TaskProvider } from '@/shared/ui/@TaskContext/TaskContext';
import Calendar from '@/widgets/Calendar/ui/Calendar';

const App: React.FC = () => {
    return (
        <TaskProvider>
            <Calendar />
        </TaskProvider>
    );
};

export default App;