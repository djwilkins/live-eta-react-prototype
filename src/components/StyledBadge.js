import React from 'react'
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Here we create a Badge component with custom styles that allows us
// a Badge placement (relative the wrapped componant) that differs
// from the limited four built in anchorOrigin prop combinations
const MyBadge = withStyles(() => ({
    badge: {
        right: '-24px',
        top: 17,
        padding: '0 4px'
    },
}))(Badge);

const StyledBadge = ({ badgeContent, color, children }) => (
    <MyBadge badgeContent={badgeContent} color={color}>
        {children}
    </MyBadge>
)

export default StyledBadge;