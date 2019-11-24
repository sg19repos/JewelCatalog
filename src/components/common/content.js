import React, { Fragment } from "react";
import Screen1 from "../screen1";
<<<<<<< HEAD
import Favorites from "../favorites";
=======
import Screen2 from "../screen2";
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5
import HomeScreen from "../homeScreen";
import Screen4 from "../screen4";
import Screen5 from "../screen5";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Categories from "../categoryPages";
import ItemDetailView from "../common/itemDetailView";
import ContentStyles from "../styles/contentStyles";
=======
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5

const Content = () => {
    return (
        <Fragment>
<<<<<<< HEAD
            <ContentStyles>
                <Switch>
                    <Route path="/screen1">
                        <Screen1 />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/home">
                        <HomeScreen />
                    </Route>
                    <Route path="/screen4">
                        <Screen4 />
                    </Route>
                    <Route path="/screen5">
                        <Screen5 />
                    </Route>
                    {/* <Route path="/categories/">
                        {console.log(window.location.search)}   
                        <Categories
                            gallerySelection={
                                window.location.search.split("?name=")[1]
                            }
                        />
                    </Route> */}
                    <Route path="/categories/" component={Categories} />
                    <Route path="/itemDetails">
                        <ItemDetailView />
                    </Route>
                </Switch>
            </ContentStyles>
=======
            <Switch>
                <Route path="/screen1">
                    <Screen1 />
                </Route>
                <Route path="/screen2">
                    <Screen2 />
                </Route>
                <Route path="/home">
                    <HomeScreen />
                </Route>
                <Route path="/screen4">
                    <Screen4 />
                </Route>
                <Route path="/screen5">
                    <Screen5 />
                </Route>
            </Switch>
>>>>>>> 41cd1c1b5566f613acf1423cc54e1572ffaa5da5
        </Fragment>
    );
};

export default Content;
