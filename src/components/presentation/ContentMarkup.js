import React from "react";

const ContentMarkup = props =>
    <>
        <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative" data-uk-height-viewport="min-height: 400">
            <div className="uk-container uk-container-small uk-width-1-2@s" data-uk-scrollspy="target: div > *; cls: uk-animation-slide-bottom-small; delay: 150">
                <div className="animate">
                    <p className="lead">Succeeding with the over 50s is the fastest growth hack available to any consumer driven business</p>
                    <p>People over 50 hold 80% of the wealth and 70% of the income in the United States but are the target of only 5% of marketing spend</p>
                    <p>And they are starting life all over again</p>
                    <p>If you want to be a first mover, if you want find out how your brand can be the first choice for the wealthiest and most dynamic demographic in America email us on chris@flipside global.com.</p>
                    <p >Discover success on the Flipside.</p>
                </div>
            </div>
        </div>

        <footer className="uk-width-1-1 uk-position-bottom-center">
            <div>
                <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
                    <span className="uk-text-small uk-text-muted">&copy; 2019 Flipside | Contact <a href="mailto:chris@flipside.global?subject=Contact from Flipside web site">Chris Foster</a></span>
                </div>
            </div>
        </footer>
    </>

export default ContentMarkup;
