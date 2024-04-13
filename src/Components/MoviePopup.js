import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom" 
import "./moviePopup.css";
import { FaTimes, FaStar, FaStarHalf, FaPlay, FaPlus, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import jsonGenreData from "../genres.json"

export default function MoviePopup({showPopup, setShowPopup, movie, setShowSmokeScreen, handleExit}) {
    const [genreData, setGenreData] = useState([]);
    const [genreArray, setGenreArray] = useState();

    // search the json data for desired genre
    const findGenre = (movieId) => {
        for (let i = 0; i < genreData.length; i++) {
            if (genreData[i].id == movieId) {
                return (genreData[i].name);
            }
        }

        return null;
    }

    useEffect(() => {
        let movieGenres = []
        setGenreData(jsonGenreData);

            for (let i = 0; i < movie.genre_ids.length; i++) {
                let genre = findGenre(movie.genre_ids[i]);
                movieGenres.push(genre);
            }

            setGenreArray(movieGenres);

    }, [])

    // make body not scrollable if showPopup is true
    useEffect(() => {
        let body = document.body;

        if (showPopup) {
            body.classList.add('special-body');
        } else {
            body.classList.remove('special-body');
        }
    },[showPopup]);
    
    if (!showPopup) return null;

    return ReactDOM.createPortal(
        <div className="movie-popup-container">
            <div className="popup-container">
                
                <div className="movie-popup-exit-btn" onClick={handleExit}>
                    <FaTimes />
                </div>

                <div className="popup-img-container">
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}></img>

                    <div className="popup-header-container">
                        <h1 id="popup-title">{movie.original_title}</h1>
                        
                        <div className="popup-btn-container">
                            <div id="popup-play-btn">
                                <FaPlay id="popup-play-icon"/>
                                <p>Play</p>
                            </div>
                            
                            <div className="popup-icon">
                                <FaPlus />
                            </div>

                            <div className="popup-icon">
                                <FaRegThumbsUp />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="popup-details-container">

                    <h1>{movie.title}</h1>

                    <div className="ratings-container">
                        <ul className="ratings-list">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStarHalf /></li>
                        </ul>

                        <p>{movie.release_date}</p>
                    </div>

                    <p id="popup-description">{movie.overview}</p>
                    

                    <ul className="genres-list">
                        <li>Genres: </li>

                        {genreArray.map((item, i) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>,
        document.body
    );
    
}