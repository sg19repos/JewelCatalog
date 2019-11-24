import styled from "styled-components";

const HeaderStyles = styled.div`
    background-color: #f9f9f9;
    color: #000000;
    z-index: 1000;
    top: 0;
    float: left;
    height: auto;
    margin: 0% 0% 3% 0%;
    position: fixed;
    width: 100%;
    > h5 {
        margin: 1% auto 1% auto;
    }
    font-size: 50px;
    font-family: Cinzel;
`;

const NonHomePages = styled.div`
    background-color: #fff;
    color: #000000;
    z-index: 1000;
    top: 0;
    float: left;
    height: 6%;
    margin: 2% 0% 3% 0%;
    position: fixed;
    width: 100%;
    > h5 {
        margin: 1% auto 1% auto;
    }
    font-size: 25px;
    font-family: Lato;
    font-weight: 100 !important;
`;

const OtherPages = styled.div`
    background-color: #fff;
    color: #000000;
    z-index: 1000;
    top: 0;
    float: left;
    height: 6%;
    margin: 2% 0% 3% 0%;
    position: fixed;
    width: 100%;
    > h5 {
        margin: 1% auto 1% auto;
    }
    font-size: 25px;
    font-family: Lato;
    font-weight: 100 !important;
`;

export { HeaderStyles, NonHomePages, OtherPages };
