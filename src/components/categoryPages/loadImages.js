import React from "react";
import TitlebarGridList from "./gridListImages";

const LoadImages = ({ gallerySelection }) => {
    return (
        <div>
            <TitlebarGridList gallerySelection={gallerySelection} />
        </div>
    );
};

export default LoadImages;
