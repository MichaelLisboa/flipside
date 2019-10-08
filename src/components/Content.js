import React from "react";
import useRouter from "../lib/UseRouter";
import PageStyles from "./PageStyles";
import ContentMarkup from "./presentation/ContentMarkup";

const Content = props => {
    const { location } = useRouter();
    return (
        <div style={location.pathname !== '/' ? PageStyles : null} className="wrap">
            <ContentMarkup />
        </div>
    )
}
export default Content;
