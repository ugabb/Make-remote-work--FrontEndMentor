import React from "react"
import SandwichMenu from "./SandwichMenu";

export default function Nav() {
    const [sandwich, setSandwich] = React.useState(false);
    function menuToggle() {
        setSandwich(prevSand => !prevSand)  
    }

    const menuItemData = [
        "Features",
        "Company",
        "Carrers",
        "About"
    ]

    return (
        <nav className="nav-container">
            <img src="./images/logo.svg"></img>
            <img onClick={menuToggle} className="icon-menu" src="./images/icon-menu.svg"></img>
            
            <SandwichMenu
                sandwich={sandwich}
                toggle={menuToggle}
                item={menuItemData}
             />
        </nav>
    )
}

//${sandwich ? "menu-sandwich" : "menu-sandwich-none"}