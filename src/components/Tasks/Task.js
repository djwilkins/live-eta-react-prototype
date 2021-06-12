import React from 'react'
import StyledCard from '../shared/StyledCard';
import StyledTypography from '../shared/StyledTypography';
import StyledBadge from './StyledBadge';

export default function Task({task}) {

    return (
        <StyledCard style={task.status}>
            <StyledBadge style={task.status} badgeContent={task.minutes.left < 10 ? `0${task.minutes.left}:00` : `${task.minutes.left}:00`}>
                <StyledTypography>
                    {task.title}
                </StyledTypography>
            </StyledBadge>
        </StyledCard>
    )
}
