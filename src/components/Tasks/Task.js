import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import StyledBadge from './StyledBadge';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((Theme) => createStyles({
    card: {
        display: "flex",
        borderStyle: "none",
        backgroundColor: Theme.palette.info.main,
        minWidth: "750px",
        maxWidth: "1000px",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        marginBottom: "5px"
    },
    title: {
        fontSize: 24,
        color: "white"
    }
}));

export default function Task({task}) {
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <StyledBadge badgeContent={task.minutes < 10 ? `0${task.minutes}:00` : `${task.minutes}:00`} color="secondary">
                <Typography className={classes.title} variant="body1" align="center">
                    {task.title}
                </Typography>
            </StyledBadge>
        </Card>
    )
}