import React, { useState } from "react";
import { FaStar, FaPlay, FaPlus, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import './movie.css';

export default function Movie({movie}) {
    const [hoverStyle, setHoverStyle] = useState(false);
    const roundedRating = (movie.vote_average).toFixed(1);

    if (movie === undefined) 
        return (<div></div>)

    return(
        <div className="movie-container">

            <div className="info-container" onMouseEnter={() => setHoverStyle(true)} onMouseLeave={() => setHoverStyle(false)}>
                <img alt="" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}></img>

                <div className={`description-container ${hoverStyle ? 'show-desc' : ''}`}>
                    <div className="title-container">
                        <p id="title">{movie.title}</p>
                    
                        <div className="rating-container">
                            <p>Rating {roundedRating}/10</p>
                            <FaStar id="star"/>
                        </div>
                    </div>

                    <p id="data">{movie.release_date}</p>

                    <div className="btn-container">
                        <FaPlay className="movie-icon" />
                        <FaPlus className="movie-icon" />
                        <FaRegThumbsUp className="movie-icon" />
                        <FaRegThumbsDown className="movie-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}