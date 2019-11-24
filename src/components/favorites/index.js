import React, { Fragment, useState } from "react";
import { tileDataEarRings, tileDataRings } from "../categoryPages/tileData";
import FavsList2 from "./favsList2";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Favorites() {
    const [favs, setFavs] = useState(
        localStorage.getItem("favs")
            ? JSON.parse(localStorage.getItem("favs")).ids
            : []
    );

    const removeItemFromCart = favId => {
        const favIds = localStorage.getItem("favs");
        const filteredIds = JSON.parse(favIds).ids.filter(
            item => item !== favId
        );
        localStorage.setItem("favs", JSON.stringify({ ids: filteredIds }));
        setFavs(JSON.parse(localStorage.getItem("favs")).ids);
    };

    const tileData = [...tileDataEarRings, ...tileDataRings];

    return (
        <Fragment>
            {favs.length > 0 ? (
                Array.from(new Set(favs)).map(fav => (
                    <div key={fav}>
                        <FavsList2
                            favName={
                                tileData.filter(item => item.modelNo === fav)[0]
                                    .title
                            }
                            favImage={
                                tileData.filter(item => item.modelNo === fav)[0]
                                    .img
                            }
                            favId={
                                tileData.filter(item => item.modelNo === fav)[0]
                                    .modelNo
                            }
                            favCategory={
                                tileData.filter(item => item.modelNo === fav)[0]
                                    .category
                            }
                            removeItemFromCart={removeItemFromCart}
                        />
                    </div>
                ))
            ) : (
                <div>
                    <img
                        width="300px"
                        height="300px"
                        src="icon_emptybox.jpg"
                        alt="empty_cart"
                    />
                    <Container fixed>
                        <Typography component="div">
                            <h5>
                                Your box looks empty. Please try adding new
                                items and check back again
                            </h5>
                        </Typography>
                    </Container>
                </div>
            )}
        </Fragment>
    );
}

export default Favorites;
