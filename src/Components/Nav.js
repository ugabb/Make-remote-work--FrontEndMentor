import React from "react"

export default function Nav() {

    const [sandwich, setSandwich] = React.useState(false);
    function menuToggle() {
        setSandwich(prevSand => !prevSand)
        
    }

    return (
        <nav className="nav-container">
            <img src="./images/logo.svg"></img>
            <img onClick={menuToggle} className="icon-menu" src="./images/icon-menu.svg"></img>
            <aside className={`${sandwich ? "menu-sandwich" : "menu-sandwich-none"}`}>
                <div className="menu-container">
                    <div className="x-container">
                        <img onClick={menuToggle} className="icon-menu-closed" src="./images/icon-close-menu.svg"></img>
                    </div>
                    <p>Features</p>
                    <p>Company</p>
                    <p>Carrers</p>
                    <p>About</p>
                    <div className="login-container">
                        <button className="btn-menu">Login</button>
                        <button className="btn-menu btn-register">Register</button>
                    </div>
                </div>
            </aside>
        </nav>
    )
}

//${sandwich ? "menu-sandwich" : "menu-sandwich-none"}