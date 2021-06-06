import React from 'react'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import RestoreIcon from '@material-ui/icons/Restore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    buttonGroup: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2.5)
    },
    editButton: {
        marginRight: theme.spacing(0.5)
    },
    resetButton: {
        marginLeft: theme.spacing(0.5)
    }
}))

export default function AppControls() {
    const classes = useStyles();

    return (
        <div className={classes.buttonGroup}>
            <Button className={classes.editButton} size="large" variant="contained" color="default" disableElevation startIcon={<EditIcon />}>Edit</Button>
            <Button className={classes.resetButton} size="large" variant="contained" color="default" disableElevation startIcon={<RestoreIcon />}>Reset Tasks</Button>
        </div>
    )
}