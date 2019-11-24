import React, { Fragment } from "react";
import ReactPanZoom from "react-image-pan-zoom-rotate";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";
import ItemSpecs from "./itemSpecs";

const useStyles = makeStyles(theme => ({
    ImageBox: {
        display: "none"
    }
}));

const ItemDetailView = () => {
    // console.log(ReactDOM.findDOMNode("ItemDetailView"));
    const classes = useStyles();
    const getUrlParams = input => {
        return new URLSearchParams(window.location.search).get(input);
    };
    const imgSource = getUrlParams("img");
    const imgModelNo = getUrlParams("modelNo");
    const itemName = getUrlParams("itemName");
    const itemCategory = getUrlParams("itemCategory");

    return (
        <Fragment>
            <h4 style={{ fontFamily: "Lato" }}>{itemName}</h4>

            <ReactPanZoom
                key={imgModelNo}
                image={imgSource}
                className={classes.ImageBox}
            />

            <ItemSpecs
                itemName={itemName}
                imgModelNo={imgModelNo}
                itemCategory={itemCategory}
            />
        </Fragment>
    );
};

export default ItemDetailView;
