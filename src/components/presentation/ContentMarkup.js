import React from "react";
import logo from '../../images/flipside-logo.svg';

const ContentMarkup = props =>
        <div className="uk-container uk-container-small">
            <div className="content-card-container uk-grid-collapse uk-flex-center uk-flex-middle uk-height-viewport" data-uk-grid data-uk-height-viewport="min-height: 640; offset-top: true; offset-bottom: 20px">
                <div className="uk-card uk-card-default uk-box-shadow-large uk-box-shadow-hover-xlarge uk-border-rounded">
                    <div className="uk-padding-remove uk-card-body uk-grid-collapse uk-child-width-1-2@s" data-uk-grid>
                        <div className="big-message uk-flex uk-flex-middle uk-background-success uk-padding-large" data-uk-scrollspy="target: h2 > *; cls: uk-animation-slide-bottom-small; delay: 150">
                            <h2 style={{color: "#fff"}}><span>Succeeding</span> <span>with the</span> <span>over 50s</span> <span>is the</span> <span>fastest growth hack</span> <span>available to</span> <span>any consumer driven business</span></h2>
                        </div>
                        <div className="support-copy uk-flex uk-flex-middle uk-padding-large" data-uk-scrollspy="target: div > *; cls: uk-animation-slide-bottom-small; delay: 350">
                            <div>
                                <p>People over 50 hold 80% of the wealth and 70% of the income in the United States but are the target of only 5% of marketing spend</p>
                                <p>What's more they are starting life all over again</p>
                                <p>If you want to be a first mover, if you want to find out how your brand can be the first choice for the wealthiest and most dynamic demographic in America contact us at:</p>
                                <p className="uk-text-center">
                                    <a href="mailto:chris@flipside.global?subject=Contact from Flipside web site">chris@flipside.global</a> <br />
                                    <span className="uk-margin">or</span><br />
                                    <a href="mailto:vaughan@flipside.global?subject=Contact from Flipside web site">vaughan@flipside.global</a>
                                </p>
                                <p className="uk-text-center">
                                    Discover success on the<br />
                                    <img className="uk-margin-small" src={logo} width="100px" alt="Flipside Logo" data-uk-image />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

export default ContentMarkup;
