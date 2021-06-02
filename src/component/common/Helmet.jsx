import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="Caer8th is a European artist who work explores the nexus between the cosmos and human consciousness" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
