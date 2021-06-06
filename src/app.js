import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import StyledBadge from './components/styled/StyledBadge';
import CenterBox from './components/styled/CenterBox';
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
    },
    avatar: {
        backgroundColor: "white"
    },
    icon: {
        color: "blue"
    }
}));

export default function App() {
    const classes = useStyles();
    const myTasks = [
        {
            title: 'Brush Teeth',
            minutes: 5
        },
        {
            title: 'Take Shower',
            minutes: 15
        }
    ];

    return (
        <div>
            <CenterBox>
                {myTasks.map((task, index) => (
                    <Card className={classes.card} variant="outlined" key={index}>
                        <StyledBadge badgeContent={task.minutes < 10 ? `0${task.minutes}:00` : `${task.minutes}:00`} color="secondary">
                            <Typography className={classes.title} variant="body1" align="center">
                                {task.title}
                            </Typography>
                        </StyledBadge>
                    </Card>
                ))}
            </CenterBox>
        </div>
    )
}
