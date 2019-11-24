import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {
        margin: "0px",
        backgroundImage: `linear-gradient(141deg, #333 0%, #666 51%, #aaa 75%)`,
        borderRadius: "0px",
        width: "100%",
        textTransform: "capitalize"
    },
    input: {
        display: "none"
    }
}));

export default function CategoriesButtons() {
    const classes = useStyles();

    return (
        <Button variant="contained" color="primary" className={classes.button}>
            CHECK IT OUT
        </Button>
    );
}
