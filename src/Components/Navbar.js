import React, {useState, useEffect} from "react";
import Searchbar from "./Searchbar";
import "./navbar.css";

export default function Navbar() {
    const [navStyle, setNavStyle] = useState(false);
    var navActiveClass = navStyle ? "active-nav" : "";

    useEffect(() => {
        document.addEventListener('scroll', () => {

            if (window.scrollY > 10) {
                setNavStyle(true);
            } else {
                setNavStyle(false);
            }
        });
    });

    return(
        <div className="nav-container ">
            <div className={"nav-background " + navActiveClass}></div>
            
            <div className="nav-logo-container">
                <h3>NOT NETFLIX</h3>
            </div>

            <div className="nav-list-container">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>

            <div className="nav-tools-container">
                <ul className="nav-tools">
                    
                    <li className="searchbox-container">
                        <Searchbar />
                    </li>

                    <li>Kids</li>

                    <li>Notifications</li>
                    
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}