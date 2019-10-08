import React from "react";
import ContactForm from "../components/ContactForm";
import PageStyles from "../components/PageStyles";
import useRouter from "../lib/UseRouter";

const Contact = props => {
        const { location } = useRouter();
        return (
            <section style={location.pathname !== '/' ? PageStyles : null} className="uk-section uk-section-secondary uk-padding-remove-bottom">
    			<div className="uk-container uk-margin-large-top">
                    <h2 className="uk-text-center section-title-primary uk-margin-large-top">Get in touch</h2>
                    <p className="uk-align-center uk-text-center uk-width-1-2@s uk-margin-large-bottom">
                        Lorem ipsum dolor sit amet.
                    </p>
    				<div className="uk-container uk-container-small">
                        <div>
                            <ContactForm />
                        </div>
    				</div>
    			</div>
    		</section>
        )
    }

export default Contact;
