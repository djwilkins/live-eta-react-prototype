import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        fontSize: 24,
        color: "white"
    }
});

export default function StyledTypography({ children }) {
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant="body1" align="center">
            { children }
        </Typography>
    )
}