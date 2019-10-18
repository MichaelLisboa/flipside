import React from "react";
import useRouter from "../lib/UseRouter";
import PageStyles from "./PageStyles";
import ContentMarkup from "./presentation/ContentMarkup";

const Content = props => {
    const { location } = useRouter();
    return (
        <div style={location.pathname !== '/' ? PageStyles : null} className="wrap-green uk-height-viewport uk-background-success-light">
            <ContentMarkup />
        </div>
    )
}
export default Content;
