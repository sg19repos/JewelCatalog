import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: "96%",
        maxWidth: 360,
        backgroundColor: "#f2f2f2",
        margin: "2%"
    },
    cartItemName: {
        "& .MuiTypography-body1": {
            fontFamily: "Cabin !important"
        }
    },
    imageAvatar: {
        border: "1px solid #aaa",
        padding: "15%",
        marginTop: "50%"
    },
    inline: {
        display: "inline"
    },
    margin: {
        borderColor: "#339966",
        padding: "1px 5px"
    },
    Avatar: {
        marginRight: "25px"
    }
}));

export default function FavsList({
    favName,
    favImage,
    favId,
    removeItemFromCart
}) {
    console.log(removeItemFromCart);
    const classes = useStyles();

    // const deleteCartItem = favId =>
    //     localStorage.setItem("favs", JSON.stringify({ ids: filteredIds }));

    const deleteCartItem = favId => removeItemFromCart(favId);

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar className={classes.Avatar}>
                    <Link
                        to={{
                            pathname: "/itemDetails",
                            search: `?img=${favImage}&modelNo=${favId}`
                        }}
                        style={{
                            padding: "0px",
                            margin: "1%",
                            width: "48%",
                            backgroundColor: "#f2f2f2"
                        }}
                    >
                        <Avatar
                            className={classes.imageAvatar}
                            alt="image"
                            src={favImage}
                        />
                    </Link>
                </ListItemAvatar>

                <ListItemText
                    className={classes.cartItemName}
                    primary={favName}
                    secondary={
                        <React.Fragment>
                            <Button
                                variant="outlined"
                                size="small"
                                color="primary"
                                className={classes.margin}
                            >
                                Confirm
                            </Button>
                            <IconButton aria-label="delete">
                                <DeleteIcon
                                    fontSize="small"
                                    onClick={() => deleteCartItem(favId)}
                                />
                            </IconButton>
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                            >
                                **Click SAVE to get confirmation OTP. We will
                                never spam you
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}
