import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import './searchbar.css';

export default function Searchbar() {
    const inputRef = useRef(null);
    const [activeSearchbox, setActiveSearchbox] = useState(false);
    const [hideSearchIcon, setHideSearchIcon] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    var searchActiveStyle = activeSearchbox ? "active-search" : "";
    var hideSearchStyle = hideSearchIcon ? "hide-search-icon" : "";

    const toggleSearchbox = () => {
        setActiveSearchbox(!activeSearchbox);
        setHideSearchIcon(!hideSearchIcon);
        inputRef.current.focus();
        setIsFocused();
    }

    const handleBlur = () => {
        setActiveSearchbox(!activeSearchbox);
        setHideSearchIcon(!hideSearchIcon);
    }

    const handleSearch = () => {
        console.log('searching');
    }

    return(
        <div className="search-bar-container">
            <FaSearch className={hideSearchStyle} id="search-icon" onClick={toggleSearchbox} />

            <div className={"searchbar-input-container " + searchActiveStyle}>
                <FaSearch id="search-icon2" />
                <input
                    ref={inputRef} 
                    id="searchbar-input"
                    onBlur={handleBlur}
                />
            </div>

        </div>
    )
}