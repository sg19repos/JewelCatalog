import React, { Fragment } from "react";
import PaperContainer from "./paperContainer";
import HomeScreenStyles from "../styles/homeScreenStyles";
import IndividualCategories from "./individualCategories";
import WeddingCollectionsCard from "./weddingCollectionsCard";
import SilverbarCard from "./silverbarCard";
import SeeAllCollections from "./seeAllCollection";

const HomeScreen = () => {
    return (
        <Fragment>
            <HomeScreenStyles>
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <h5>Home</h5>
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5
=======
                    <h5>Home</h5>
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5
                    <div className="homeScreenPapers">
                        <PaperContainer />
                    </div>
                    <div className="homeScreenPapers">
                        <IndividualCategories />
                    </div>
                    <div className="homeScreenPapers">
                        <WeddingCollectionsCard />
                    </div>
                    <div className="homeScreenPapers">
                        <SilverbarCard />
                    </div>
                    <div className="homeScreenPapers">
                        <SeeAllCollections />
                    </div>
                </div>
            </HomeScreenStyles>
        </Fragment>
    );
};

export default HomeScreen;
