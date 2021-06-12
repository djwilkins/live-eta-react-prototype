import React from 'react'
import StyledCard from '../shared/StyledCard';
import StyledTypography from '../shared/StyledTypography';
import StyledBadge from './StyledBadge';

export default function Task({task}) {

    return (
        <StyledCard style={task.status}>
            <StyledBadge badgeContent={task.minutes < 10 ? `0${task.minutes}:00` : `${task.minutes}:00`} color="secondary">
                <StyledTypography>
                    {task.title}
                </StyledTypography>
            </StyledBadge>
        </StyledCard>
    )
}