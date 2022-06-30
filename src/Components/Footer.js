import React from "react";
import Img from './Img.js'

export default function Footer(){
    const imgFooter = {
        databiz:"client-databiz",
        audiophile:"client-audiophile",
        meet:"client-meet",
        marker:"client-maker"
    }

    return(
        <footer className="img-footer-container">
           <Img img={imgFooter.databiz}/>
           <Img img={imgFooter.audiophile}/>
           <Img img={imgFooter.meet}/>
           <Img img={imgFooter.marker}/>
        </footer>
    )
}
