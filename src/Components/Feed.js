import React, {useEffect, useState} from "react";
import Slide from "./Slide";
import "./feed.css";

export default function Feed({setShowSmokeScreen}) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [horrorsMovies, setHorrorMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [crimeMovies, setCrimeMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const apiKey = process.env.REACT_APP_TBD_MOVIE_API_KEY;

    const getPopularMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
        .then(res => res.json())
        .then(json => setPopularMovies(json.results))
    }

    const getUpcomingMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key="+apiKey)
        .then(res => res.json())
        .then(json => setUpcomingMovies(json.results))
    }

    const getActionMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&with_genres=28")
        .then(res => res.json())
        .then(json => setActionMovies(json.results))
    }

    const getComedyMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&with_genres=35")
        .then(res => res.json())
        .then(json => setComedyMovies(json.results))
    }

    const getHorrorMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&with_genres=27")
        .then(res => res.json())
        .then(json => setHorrorMovies(json.results))
    }

    const getAnimationMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&with_genres=16")
        .then(res => res.json())
        .then(json => setAnimationMovies(json.results))
    }

    const getCrimeMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&with_genres=80")
        .then(res => res.json())
        .then(json => setCrimeMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies();
        getActionMovies();
        getComedyMovies();
        getHorrorMovies();
        getAnimationMovies();
        getCrimeMovies();
        getUpcomingMovies();
    },[]);

    return(
        <div className="feed-container">

            <div className="smoke-screen-container"> </div>

            <Slide title="Popular" movieArray={popularMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="Comedy" movieArray={comedyMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="Crime" movieArray={crimeMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="Action" movieArray={actionMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="Comedy" movieArray={comedyMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="Horror" movieArray={horrorsMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="Animation" movieArray={animationMovies} setShowSmokeScreen={setShowSmokeScreen}/>
            <Slide title="UpComing" movieArray={upcomingMovies} setShowSmokeScreen={setShowSmokeScreen}/>
        </div>
    )
}