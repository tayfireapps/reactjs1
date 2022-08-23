import React, { Component } from "react";
import {FooterHelp, Link} from '@shopify/polaris';

class Footer extends Component {
  render() {
    return (
        <FooterHelp>
            Learn more about{' '}
            <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
            fulfilling orders
            </Link>
        </FooterHelp>
    );
  }
}
export default Footer; 