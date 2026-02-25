import React from "react";
import styles from ".page.module.css";

export default function home(){
    return(
        <>
        <section id="home" className="hero">
        <div className="slider-container">
            <div className="progress-ring">
                <div className="progress-bar" id="progressBar"></div>
            </div>
            
            <div className="slider-stage" id="sliderStage"></div>
            
            <div className="text-overlay" id="textOverlay">
                <h2 className="slide-title" id="slideTitle">Mountain Peak</h2>
                <p className="slide-description" id="slideDescription">Majestic snow-capped mountains reaching towards the endless sky, showcasing nature's raw beauty and power.</p>
            </div>
            
            <button className="nav-arrow prev" id="prevArrow" aria-label="Previous"></button>
            <button className="nav-arrow next" id="nextArrow" aria-label="Next"></button>
            
            <div className="controls">
                <button className="control-btn play-pause-btn" id="playPauseBtn" title="Play/Pause">
                    <span className="play-icon"></span>
                    <span className="pause-icon"></span>
                </button>
            </div>
            
            <div className="dots" id="dots"></div>
            <div className="thumbnails-container" id="thumbnails"></div>
        </div>
    </section>
        </>
    )
}