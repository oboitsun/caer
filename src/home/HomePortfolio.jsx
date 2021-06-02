import React, { Component , Fragment } from "react";

import { FiChevronUp } from "react-icons/fi";

import Header from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";

import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: "Hi, I'm Caer8th",
        description: "My art explores the nexus between the cosmos and human consciousness",
        buttonText: 'Check it out',
        buttonLink: 'https://www.instagram.com/caer8th/'
    }
]


class HomePortfolio extends Component{
    render(){
        return(
            <Fragment>
                <Helmet pageTitle="Caer8th" />

                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--1" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div id="about" className="fix">
                    <div className="about-area ptb--120  bg_color--1">
                        <div className="about-wrapper">
                            <div className="container">
                                <div className="row row--35 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="thumbnail">
                                            <img className="w-100" src="/assets/images/about/caer.png" alt="About Images"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="about-inner inner">
                                            <div className="section-title">
                                                <h2 className="title">About Caer8th</h2>

                                                <p className="description">Vladimír Hirsch, better known as Caer8th, is one of Europe's most prolific street artists. Since getting his start at age 14, painting the subway tunnels of Prague, he has produced thousands of murals, canvases, outdoor paintings, and graffiti pieces, which are on display across Europe and the Middle East, and even on NASA’s official website.</p>
                                                <p className="description">Caer8th’s work reflects a lifelong fascination with science fiction and surrealism. Formed of everything from oil paints to light, his art explores the nexus between the cosmos and human consciousness, and between nature and technology. While Caer8th prefers to keep the spotlight on his art – “I'm only the brush”</p>
                                                <div className="slide-btn"><a className="rn-button-style--2 rn-btn-dark" href="mailto:jakub@iamprague.eu">Contact Caer8th</a></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End About Area */}



                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}
                {/* Start Back To Top */}

                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default HomePortfolio;
