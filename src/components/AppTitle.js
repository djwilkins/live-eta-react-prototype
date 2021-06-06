import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    appTitle: {
        position: "relative",
        marginTop: theme.spacing(3),
        left: "-4px" // Title has some internal space before first letter not after last (even with padding/margin zeroed out). Fixing with slight offset here.
    }
}))

export default function AppTitle() {
    const classes = useStyles();
    return (
        <Typography className={classes.appTitle} variant="h2">Live ETA</Typography>
    )
}