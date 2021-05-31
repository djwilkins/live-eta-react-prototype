import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    helloWorld: {
        marginTop: 20,
        marginBottom: 20
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.helloWorld} variant="h2" align="center">
                Hello world
            </Typography>
        </div>
    )
}
