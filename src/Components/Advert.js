import React from "react";
import './advert.css';
import { FaPlay, FaInfoCircle } from "react-icons/fa";

export default function Advert() {
    return (
        <div className="advert">
            <div className="opacity-cover"></div>

            {/* <h1 id="advert-title">Sniper Guy 6</h1> */}
            

            {/* <video autoPlay loop muted>
                <source src="./boox.mp4"/>
            </video> */}

            <img alt="Picture depicting a sniper from a fictional movie." src="./sniper.jpg"></img>

            <div className="advert-details-container">
                <div className="advert-title-container">
                    <img  alt="" id="advert-title-img" src="./advert-title.png"></img>
                </div>

                <p id="advert-description">
                    A gripping journey of veteran marksman, Jack Steele, as he faces his most challenging mission yet. Tasked with thwarting an international terrorist plot, Steele must navigate treacherous terrain, outsmart cunning adversaries, and confront his own demons to protect innocent lives.
                </p>

                <div className="advert-btn-container">
                    <div className="advert-btn" id="advert-play-btn">
                        <span> <FaPlay/> Play</span>
                    </div>

                    <div className="advert-btn" id="advert-info-btn">
                        <span> <FaInfoCircle /> More Info</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}