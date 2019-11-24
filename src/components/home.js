import React, { Fragment } from "react";
import Footer from "./common/footer";
<<<<<<< HEAD
import Header from "./common/header";
import FooterStyles from "./styles/footerStyles";
import Content from "./common/content";
import ContentStyles from "./styles/contentStyles";
=======
import FooterStyles from "./styles/footerStyles";
import Content from "./common/content";
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
<<<<<<< HEAD
            <ContentStyles>
                <Router style={{ height: "100%" }}>
                    <Header />
                    <Content />
                    <FooterStyles>
                        <Footer />
                    </FooterStyles>
                </Router>
            </ContentStyles>
=======
            <Router style={{ height: "100%" }}>
                <Content />
                <FooterStyles>
                    <Footer />
                </FooterStyles>
            </Router>
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5
        </Fragment>
    );
};

export default Home;
