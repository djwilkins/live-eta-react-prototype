import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    boxRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    boxColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
});

// This custom CenterBox component utilizes
// two Material UI Box components to center its
// children components horizontally and vertically
export default function CenterBox({ children }) {
    const classes = useStyles();

    return (
        <Box className={classes.boxRow}>
            <Box className={classes.boxColumn}>
                {children}
            </Box>
        </Box>
    )
}