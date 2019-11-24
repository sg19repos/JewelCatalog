import React, { lazy, Suspense } from "react";
import Loader from "../common/loaders";
const LoadImages = lazy(() => import("./loadImages"));

const Categories = () => {
    return (
        <div>
            <h5>
                {window.location.search
                    .split("?name=")[1]
                    .charAt(0)
                    .toUpperCase() +
                    window.location.search.split("?name=")[1].slice(1)}
            </h5>
            <Suspense fallback={<Loader />}>
                <LoadImages
                    gallerySelection={window.location.search.split("?name=")[1]}
                />
            </Suspense>
        </div>
    );
};

export default Categories;
