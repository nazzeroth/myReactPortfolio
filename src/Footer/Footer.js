import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import cv from "./dalocsa_gabor.pdf";

const Footer =()=> {
    return (<div className="footer">
        <footer>
            <div>
            <a href="https://www.linkedin.com/in/g%C3%A1bor-dalocsa-76a397198/" target="_blank" className="footer-icon"><LinkedInIcon fontSize='large'/></a>
            <a href="https://www.facebook.com/gabor.dalocsa.7/" target="_blank" className="footer-icon"><FacebookIcon fontSize='large'/></a>
            <a href="https://github.com/nazzeroth/" target="_blank" className="footer-icon"><GitHubIcon fontSize='large'/></a>
            <a href={cv} className="footer-icon"><DescriptionIcon fontSize='large'/></a>
                <h2>© Copyright 2021 Dalocsa Gábor</h2>
            </div>
        </footer>
    </div>)
}

export default Footer;