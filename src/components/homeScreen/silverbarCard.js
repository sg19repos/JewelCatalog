import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import GridImage from "./image";
import CategoriesButtons from "./openCategoriesButton";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2, 2, 2)
    },
    paragraph: {
        textAlign: "left",
        borderBottom: "1px dotted #ddd"
    }
}));

export default function SilverbarCard() {
    const classes = useStyles();
    const silverBar1 = "icon_silverbar.png";
    const silverCoin1 = "icon_silvercoin.png";
    const silverBar2 = "icon_silverbar3.png";
    const silverCoin2 = "icon_silvercoinbox.png";

    return (
        <div>
            <Paper className={classes.root}>
                <p className={classes.paragraph}>Silver coins & Bars</p>
                <GridImage src={silverBar2} />
                <GridImage src={silverCoin2} />
                <GridImage src={silverBar1} />
                <GridImage src={silverCoin1} />
                <CategoriesButtons />
            </Paper>
        </div>
    );
}
