import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { tileDataEarRings, tileDataRings } from "./tileData";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import handleFavClick from "../../services/setFavorites";

const history = createBrowserHistory();

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: "90%",
        height: "auto",
        marginBottom: "15% !important"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    favIcon: {
        position: "absolute",
        top: "2%",
        right: "2%",
        color: "#999"
    },
    catImage: {
        width: "100%"
    }
}));

export default function TitlebarGridList({ gallerySelection }) {
    const classes = useStyles();
    let tileData = [];
    gallerySelection === "rings"
        ? (tileData = tileDataRings)
        : (tileData = tileDataEarRings);

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {tileData.map(tile => (
                    <Link
                        key={tile.img}
                        to={{
                            pathname: "/itemDetails",
                            search: `?img=${tile.img}&modelNo=${tile.modelNo}&itemName=${tile.title}&itemCategory=${tile.category}`
                        }}
                        style={{
                            padding: "0px",
                            margin: "1%",
                            width: "48%",
                            backgroundColor: "#f2f2f2"
                        }}
                    >
                        <GridListTile
                            key={tile.img}
                            id={tile.modelNo}
                            style={{ height: "-webkit-fill-available" }}
                            onClick={() =>
                                history.push({
                                    pathname: "/itemDetails",
                                    search: `?img=${tile.img}`
                                })
                            }
                        >
                            <img
                                className={classes.catImage}
                                src={tile.img}
                                alt={tile.title}
                                width="30%"
                                height="70%"
                            />
                            <FavoriteBorderRoundedIcon
                                onClick={() => handleFavClick(tile.modelNo)}
                                className={classes.favIcon}
                            />

                            <GridListTileBar
                                style={{
                                    height: "20%"
                                }}
                                title={tile.title}
                            />
                        </GridListTile>
                    </Link>
                ))}
            </GridList>
        </div>
    );
}
