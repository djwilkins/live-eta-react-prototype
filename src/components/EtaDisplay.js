import React from 'react'
import StyledCard from './shared/StyledCard';
import StyledTypography from './shared/StyledTypography';

export default function EtaDisplay({eta}) {
    return (
        <StyledCard style="eta">
            <StyledTypography>
               {`ETA: ${eta} Minutes`} {/* Place holder for actual time */}
            </StyledTypography>
        </StyledCard>
    )
}