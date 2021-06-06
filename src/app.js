import React from 'react'
import Task from './components/Task';
import CenterBox from './components/CenterBox';

export default function App() {
    // Hard coding some tasks here just during UI development
    const myTasks = [
        {
            title: 'Brush Teeth',
            minutes: 5
        },
        {
            title: 'Take Shower',
            minutes: 15
        }
    ];

    return (
        <CenterBox>
            {myTasks.map((task, index) => (
                <Task task={task} key={index} />
            ))}
        </CenterBox>
    )
}
