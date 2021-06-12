import React from 'react'
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/styles';

// Here we create custom Badge component styles that allow us to
// use a Badge placement (relative the wrapped componant) that differs
// from the limited four built in anchorOrigin prop combinations.
// We also dynamically determine the Badge background color based on task status.
const useStyles = makeStyles({
    badge: {
        right: '-24px',
        top: 17,
        padding: '0 4px',
        backgroundColor: '#f50057',
        color: 'white',
        backgroundColor: ({style}) => {
            switch(style) {
                case 'active':
                    return '#f50057'
                case 'done':
                    return '#388e3c'
                case 'skipped':
                    return '#bdbdbd'
                default:
                    return '#f50057'
            }
        }
    }
});

// Note: The use of the classes prop syntax compared (not className) below.
// This ultimately allows us to get at some underlying Material-UI component
// classes not otherwise accessible. (Source: patorjk comment Aug 2, 2019:
// https://github.com/mui-org/material-ui/issues/9455)
export default function StyledBadge({ style, badgeContent, children }) {
    const classes = useStyles({style});

    return (
        <Badge classes={{badge: classes.badge}} badgeContent={badgeContent}>
            {children}
        </Badge>
    )
}
