import React from "react";
import ContactForm from "../components/ContactForm";
import PageStyles from "../components/PageStyles";
import useRouter from "../lib/UseRouter";

const Contact = props => {
    const { location } = useRouter();
    return (
        <section style={location.pathname !== '/' ? PageStyles : null} className="wrap wrap-blue uk-section uk-background-primary uk-padding-remove-bottom">
			<div className="uk-container uk-container-small uk-margin-top">
                <div className="uk-card uk-card-default uk-card-large uk-box-shadow-medium uk-box-shadow-hover-xlarge uk-padding uk-margin-top uk-margin-bottom">
                    <h2 className="section-title-primary uk-text-center uk-margin-top">Get in touch.</h2>
                    <p className="uk-align-center uk-text-center uk-width-1-2@s uk-margin-bottom">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <ContactForm />
                </div>
			</div>
		</section>
    )
}

export default Contact;
