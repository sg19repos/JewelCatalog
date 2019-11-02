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

export default function IndividualCategories() {
    const classes = useStyles();
    const jewellerySetImage1 = "icon_jewelleryset1.jpeg";
    const jewellerySetImage4 = "icon_jewelleryset4.png";
    const jewellerySetImage5 = "icon_jewelleryset5.jpeg";
    const jewellerySetImage6 = "icon_jewelleryset6.jpg";
    const jewellerySetImage7 = "icon_jewelleryset7.jpg";

    return (
        <div>
            <Paper className={classes.root}>
                <p className={classes.paragraph}>Jewellery set</p>
                <GridImage src={jewellerySetImage1} />
                <GridImage src={jewellerySetImage7} />
                <GridImage src={jewellerySetImage4} />
                <GridImage src={jewellerySetImage5} />
                <GridImage src={jewellerySetImage6} />
                <CategoriesButtons />
            </Paper>
        </div>
    );
}
