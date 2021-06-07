import React from 'react'
import CenterBox from './components/CenterBox';
import AppTitle from './components/AppTitle';
import AppControls from './components/AppControls';
import Tasks from './components/Tasks/Tasks';

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
        },
        {
            title: 'Buffer',
            minutes: 10
        }
    ];

    return (
        <CenterBox>
            <AppTitle />
            <AppControls />
            {/* Add TaskTimer component here */}
            {/* Add EtaDisplay */}
            <Tasks tasks={myTasks} />
        </CenterBox>
    )
}
