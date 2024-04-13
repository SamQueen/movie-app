import React, {useEffect, useState} from "react";
import './slide.css';
import { FaChevronRight } from "react-icons/fa";
import Movie from "./Movie";

export default function Slide({title, movieArray, setShowSmokeScreen}) {
    const [sliding, setSliding] = useState(false);
    const [arr, setArr] = useState([]); 

    useEffect(() => {
        setArr(movieArray);
    },[movieArray]);

    const manipulateArray = (array) => {
        // increase 2 indexes circular
        var n = array;

        n[0] = n[2];
        n[1] = n[3];

        for (var i = 0; i < n.length; i++) {
            n[i] = n[(i+4) % n.length];
        }

        return n;
    }

    const slide = () => {
        if (!sliding) {
            // Toggle animation state
            setSliding(true);

            // Reset animation after waiting 1 second
            setTimeout(() => {
                setArr(manipulateArray(arr));
                setSliding(false);
            }, 1000);
        }
    }
    
    return(
        <div className="slide-container">

            <h1 id="slide-title">{title}</h1>

            <div className="movies-container">
                
                {movieArray.map((item, i) => (
                    <div key={i} className={`slide-item ${sliding ? 'slide' : 's'}`}>
                        {/* <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}></img> */}
                        <Movie movie={item} setShowSmokeScreen={setShowSmokeScreen}/>
                    </div>
                ))}
                
                <div className="arrow-container" onClick={slide}>
                    <FaChevronRight id="arrow"/>
                </div>
            </div>

        </div>
    )
}