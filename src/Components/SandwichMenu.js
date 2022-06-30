import React from "react";
import Nav from "./Nav";

export default function SandwichMenu(props){
    
    return(
        <aside className={`${props.sandwich ? "menu-sandwich" :           "menu-sandwich-none"}`}>
                <div className="menu-container">
                    <div className="x-container">
                        <img onClick={props.toggle}className="icon-menu-closed" src="./images/icon-close-menu.svg"></img>
                    </div>
                    <div className="item-section">
                        <p>{props.item[0]}</p>
                        <img src={`./images/icon-arrow-${"down"}.svg`}></img>
                    </div>
                    <div className="item-section">
                        <p>{props.item[1]}</p>
                        <img src={`./images/icon-arrow-${"down"}.svg`}></img>
                    </div>
                    <p>{props.item[2]}</p>
                    <p>{props.item[3]}</p>
                    
                    <div className="login-container">
                        <button className="btn-menu">Login</button>
                        <button className="btn-menu btn-register">Register</button>
                    </div>
                </div>
        </aside>
    )
}