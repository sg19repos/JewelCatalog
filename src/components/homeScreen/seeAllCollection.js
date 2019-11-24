import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: "80px",
        // backgroundImage: `linear-gradient(141deg, #aaa 0%, #333 61%, #666 75%)`,
        backgroundColor: "#fff",
        color: "#333",
        borderRadius: "2%",
        // position: "fixed",
        bottom: "20",
        width: "80%"
    }
}));

export default function SeeAllCollections() {
    const classes = useStyles();
    return (
        <Fragment>
            <Button variant="contained" className={classes.button}>
                See all our fashion collection
                <ArrowRightRoundedIcon />
            </Button>
        </Fragment>
    );
}
