import React from 'react'
import CenterBox from './components/CenterBox';
import AppTitle from './components/AppTitle';
import AppControls from './components/AppControls';
import CurrentTask from './components/CurrentTask';
import EtaDisplay from './components/EtaDisplay';
import Tasks from './components/Tasks/Tasks';

export default function App() {
    // Hard coding some tasks here just during UI development
    const myTasks = {
        all: [
            {
                title: 'Brush Teeth',
                minutes: { total: 5, left: 5 },
                status: 'active'
            },
            {
                title: 'Take Shower',
                minutes: { total: 15, left: 15 },
                status: 'skipped'
            },
            {
                title: 'Buffer',
                minutes: { total: 10, left: 10 },
                status: 'done'
            }
        ],
        current: 0
    }
    const eta = myTasks.all.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.minutes.left;
    }, 0);

    console.log("My eta equals: " + eta);

    return (
        <CenterBox>
            <AppTitle />
            <AppControls />
            <CurrentTask task={myTasks.all[myTasks.current]} />
            <EtaDisplay eta={eta} />
            <Tasks tasks={myTasks.all} />
        </CenterBox>
    )
}
