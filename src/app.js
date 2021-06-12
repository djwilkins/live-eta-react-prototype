import React from 'react'
import CenterBox from './components/CenterBox';
import AppTitle from './components/AppTitle';
import AppControls from './components/AppControls';
import Tasks from './components/Tasks/Tasks';
import CurrentTask from './components/CurrentTask';

export default function App() {
    // Hard coding some tasks here just during UI development
    const myTasks = {
        all: [
            {
                title: 'Brush Teeth',
                minutes: 5,
                status: 'active'
            },
            {
                title: 'Take Shower',
                minutes: 15,
                status: 'active'
            },
            {
                title: 'Buffer',
                minutes: 10,
                status: 'active'
            }
        ],
        current: 0
    }

    return (
        <CenterBox>
            <AppTitle />
            <AppControls />
            <CurrentTask task={myTasks.all[myTasks.current]} />
            {/* Add EtaDisplay */}
            <Tasks tasks={myTasks.all} />
            {/* <Tasks tasks={myTasks} /> */}
        </CenterBox>
    )
}
