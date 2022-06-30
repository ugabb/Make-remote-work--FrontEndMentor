import React from "react";
import MainContent from './MainContent'

export default function Main(){
    return(
        <main>
            <section>
                <img className="image-hero-mobile" src="./images/image-hero-mobile.png"></img>
            </section>
            <MainContent />
        </main>
        
    )
}