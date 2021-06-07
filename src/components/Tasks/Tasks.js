import React from 'react'
import Task from './Task';

// Possible enhancement here:
// Tasks imports new TaskGradient object.method
// It takes in the index and returns the gradient of base blue
// Adjusted some degree per each task (With base color on 0 index task)

export default function Tasks({tasks}) {
    return (
        tasks.map((task, index) => (
            <Task task={task} key={index} />
        ))
    )
}