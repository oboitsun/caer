import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
  {Social: <FaInstagram /> , link: 'https://www.instagram.com/caer8th/'},
  {Social: <FaTwitter /> , link: 'https://twitter.com/kaer_mtr'},
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/caer8th/'},


]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center ">

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default FooterTwo;
