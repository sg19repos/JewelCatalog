import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LeftImage from "./leftCardImage";
import Paper from "@material-ui/core/Paper";
import LeftImageCardContent from "./leftImageCardContent";
import CategoriesButtons from "./openCategoriesButton";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2, 2, 2),
        height: "auto"
    },
    paragraph: {
        textAlign: "left",
        borderBottom: "1px dotted #ddd"
    }
}));

export default function WeddingCollectionsCard() {
    const classes = useStyles();
    const weddingCollectionIcon1 = "icon_wedding2.png";

    return (
        <div>
            <Paper className={classes.root}>
                <p className={classes.paragraph}>Wedding collections</p>
                <LeftImage src={weddingCollectionIcon1} />
                <LeftImageCardContent />
                <CategoriesButtons />
            </Paper>
        </div>
    );
}
