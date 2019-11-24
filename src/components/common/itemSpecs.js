import React, { useState } from "react";
import CategoryIcon from "@material-ui/icons/Category";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import handleFavClick from "../../services/setFavorites";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Fab from "@material-ui/core/Fab";
import "../styles/heart.css";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function ItemSpecs({ itemName, imgModelNo, itemCategory }) {
    const [fav, setFav] = useState("heart");
    const handleSaveFav = imgModelNo => {
        setFav("heart is-active");
        handleFavClick(imgModelNo);
    };
    const history = useHistory();

    return (
        <Grid item>
            <ButtonGroup
                size="large"
                aria-label="large outlined secondary button group"
            >
                <Fab variant="extended" style={{ backgroundColor: "#ffffff" }}>
                    <Link
                        to={{
                            pathname: "/categories",
                            search: `?name=` + itemCategory
                        }}
                        onClick={() =>
                            history.push("/categories?name=" + itemCategory)
                        }
                    >
                        <CategoryIcon />
                    </Link>
                </Fab>

                <Fab variant="extended" style={{ backgroundColor: "#ffffff" }}>
                    <div
                        className={fav}
                        onClick={() => handleSaveFav(imgModelNo)}
                    ></div>
                </Fab>
                <Fab variant="extended" style={{ backgroundColor: "#ffffff" }}>
                    <WhatsappShareButton
                        url={":: " + window.location.href}
                        title={`Hey there! Check it out`}
                    >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                </Fab>
            </ButtonGroup>
        </Grid>
    );
}
