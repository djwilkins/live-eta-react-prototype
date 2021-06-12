import React from 'react'
import Card from '@material-ui/core/Card';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { gray } from '@material-ui/core/colors';

const useStyles = makeStyles((Theme) => createStyles({
    card: {
        display: "flex",
        borderStyle: "none",
        minWidth: "750px",
        maxWidth: "1000px",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        marginBottom: "5px",
        backgroundColor: ({style}) => {
            switch(style) {
                case 'active':
                    return Theme.palette.info.main
                case 'done':
                    return Theme.palette.success.main
                case 'skipped':
                    return gray
                case 'highlight':
                    return Theme.palette.warning.dark
                case 'eta':
                    return Theme.palette.primary.dark
                default:
                    return Theme.palette.info.main
            }
            // if (style === 'active') { return Theme.palette.info.main };
        }
    }
}));

export default function StyledCard({ style, children }) {
    const classes = useStyles({style});

    return (
        <Card className={classes.card} variant="outlined">
                {children}
        </Card>
    )
}