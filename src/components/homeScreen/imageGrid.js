import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridImage from "./image";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: 60,
        width: 60,
        borderRadius: "50%"
    },
    gridItem1: {
        margin: "2% 4%"
    },
    gridItem2: {
        margin: "2% 0%"
    },
    itemname: {
        textAlign: "right",
        color: "#555"
    },
    itemname2: {
        textAlign: "center",
        color: "#555"
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: 60,
        width: 60,
        borderRadius: "50%",
        margin: "auto"
    },
    gridRoot2: {
        margin: "auto 10%"
    }
}));

export default function ImageGrid() {
    const classes = useStyles();
    const ankletsImage = "icon_anklets1.png";
    const banglesImage = "icon_bangles2.png";
    const necklaceImage = "icon_necklace2.png";
    const earringsImage = "icon_earrings2.png";
    const ringsImage = "icon_rings1.png";

    function FormRow1() {
        return (
            <React.Fragment>
                <Grid item xs={3} className={classes.gridItem1}>
                    <Paper className={classes.paper}>
                        <GridImage src={ankletsImage} />
                    </Paper>
                    <h5 className={classes.itemname}>Anklets</h5>
                </Grid>
                <Grid item xs={3} className={classes.gridItem1}>
                    <Paper className={classes.paper}>
                        <GridImage src={banglesImage} />
                    </Paper>
                    <h5 className={classes.itemname}>Bangles</h5>
                </Grid>
                <Grid item xs={3} className={classes.gridItem1}>
                    <Paper className={classes.paper}>
                        <GridImage src={necklaceImage} />
                    </Paper>
                    <h5 className={classes.itemname}>Necklaces</h5>
                </Grid>
            </React.Fragment>
        );
    }

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={6} className={classes.gridItem2}>
                    <Paper className={classes.paper2}>
                        <GridImage src={earringsImage} />
                    </Paper>
                    <h5 className={classes.itemname2}>Ear rings</h5>
                </Grid>
                <Grid item xs={6} className={classes.gridItem2}>
                    <Paper className={classes.paper2}>
                        <GridImage src={ringsImage} />
                    </Paper>
                    <h5 className={classes.itemname2}>Rings</h5>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={2}
                    className={classes.gridRoot1}
                >
                    <FormRow1 />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={2}
                    className={classes.gridRoot2}
                >
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
