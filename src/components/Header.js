import React from "react";
// import { DisplayText, Button } from "@shopify/polaris";
// import PropTypes from "prop-types";
// import { Dropdown } from "@/components";
import { DisplayText } from "@shopify/polaris";
// import { ArrowLeftMinor } from "@shopify/polaris-icons";

import './header.scss';

const Header = function(props) {
    return (
        <div className="header">
            <div className="header__content">
                <DisplayText size="small">Dashboard</DisplayText>
                <div className="header__action">
                    <div className="header__action--secondary">
                        <button className="Polaris-Button Polaris-Button--plain" type="button"><span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Promo Code</span></span></button>
                    </div>
                    <div>
                        <button className="Polaris-Button" type="button" aria-controls="Polarispopover1" aria-owns="Polarispopover1" aria-expanded="false">
                            <span className="Polaris-Button__Content">
                                <span className="Polaris-Button__Text">More options</span>
                                <span className="Polaris-Button__Icon">
                                    <div className="">
                                        <span className="Polaris-Icon">
                                            <span className="Polaris-VisuallyHidden"></span>
                                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                <path d="M13.098 8h-6.196c-.751 0-1.172.754-.708 1.268l3.098 3.432c.36.399 1.055.399 1.416 0l3.098-3.433c.464-.513.043-1.267-.708-1.267Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </span>
                            </span>
                        </button>
                    </div>
                    <button className="Polaris-Button Polaris-Button--primary" aria-disabled="false" type="button">
                        <span className="Polaris-Button__Content">
                            <span className="Polaris-Button__Text">essential</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
