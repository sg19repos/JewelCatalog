import React, { Fragment } from "react";
import { HeaderStyles, NonHomePages, OtherPages } from "../styles/headerStyles";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Header() {
    const history = createBrowserHistory();

    console.log(history.location);

    const getHeaderTitle = () => {
        switch (history.location.pathname) {
            case "/home":
                return (
                    <HeaderStyles>
                        <h5>DL Jewels</h5>
                    </HeaderStyles>
                );
            case "/favorites":
                return (
                    <Typography component="div">
                        <Box fontWeight="fontWeightLight" m={1}>
                            <NonHomePages>My cart</NonHomePages>
                        </Box>
                    </Typography>
                );
            case "/itemDetails":
                return (
                    <Typography component="div">
                        <Box fontWeight="fontWeightLight" m={1}>
                            <NonHomePages>Jewel Details</NonHomePages>
                        </Box>
                    </Typography>
                );
            case "/categories":
                return (
                    <Typography component="div">
                        <Box fontWeight="fontWeightLight" m={1}>
                            <NonHomePages>Categories</NonHomePages>
                        </Box>
                    </Typography>
                );
        }
    };

    console.log("page is", history.location.pathname);

    return <Fragment>{getHeaderTitle()}</Fragment>;
}

export default withRouter(Header);
