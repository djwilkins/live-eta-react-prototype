import React from 'react'
import StyledCard from './shared/StyledCard';
import StyledTypography from './shared/StyledTypography';

export default function CurrentTask({task}) {
    return (
        <StyledCard style="highlight">
            <StyledTypography>
               {`${task.title} (${task.minutes}:00)`}
            </StyledTypography>
        </StyledCard>
    )
}