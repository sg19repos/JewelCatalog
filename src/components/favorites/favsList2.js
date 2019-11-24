import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ShopIcon from "@material-ui/icons/Shop";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
    root: {
        width: "96%",
        maxWidth: "98%",
        backgroundColor: "#f9f9f9",
        margin: "1%"
    },
    divider: {
        border: `1px solid ${theme.palette.divider}`,
        height: "30px"
    },
    cartItemName: {
        "& .MuiTypography-body1": {
            fontFamily: "Cabin !important"
        }
    },
    deleteCartItem: {
        width: "48%"
    },
    imageAvatar: {
        border: "1px solid #aaa",
        padding: "15%"
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

export default function FavsList2({
    favName,
    favImage,
    favId,
    favCategory,
    removeItemFromCart
}) {
    const classes = useStyles();
    const deleteCartItem = favId => {
        handleClose();
        removeItemFromCart(favId);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar className={classes.Avatar}>
                        <Link
                            to={{
                                pathname: "/itemDetails",
                                search: `?img=${favImage}&modelNo=${favId}&itemName=${favName}&itemCategory=${favCategory}`
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
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    Click SAVE to get confirmation OTP. We will
                                    never spam you
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            <Grid container alignItems="center" className={classes.root}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                >
                    {/* <DialogTitle
                        style={{ cursor: "move" }}
                        id="draggable-dialog-title"
                    >
                        Remove
                    </DialogTitle> */}
                    <DialogContent>
                        <DialogContentText>
                            Sure you want to remove this item from cart?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            onClick={() => deleteCartItem(favId)}
                            color="primary"
                        >
                            Remove
                        </Button>
                    </DialogActions>
                </Dialog>
                <div
                    className={classes.deleteCartItem}
                    // onClick={() => deleteCartItem(favId)}
                    onClick={handleClickOpen}
                >
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <Button
                        style={{
                            fontFamily: "Lato",
                            textTransform: "capitalize"
                        }}
                    >
                        Remove
                    </Button>
                </div>

                <Divider className={classes.divider} orientation="vertical" />
                <div className={classes.deleteCartItem}>
                    <IconButton aria-label="add to shopping cart">
                        <ShopIcon />
                    </IconButton>
                    <Button
                        style={{
                            fontFamily: "Lato",
                            textTransform: "capitalize"
                        }}
                    >
                        Proceed
                    </Button>
                </div>
            </Grid>
            <Divider />
        </Fragment>
    );
}
