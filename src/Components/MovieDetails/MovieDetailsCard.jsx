import React from 'react';
import "./MovieDetailsCard.css";

const MovieDetailsCard = ({ movieData }) => {
    return (
        <div className="card">
            <h1>You have searched for: Thor</h1>
            <div className="movie-card">
                <div className="movie-header">
                    <p>sdffvs</p>
                </div>
                <div className="movie-contents">
                    <div className="movie-img">
                        <img src={movieData.Poster} alt="" />
                    </div>
                    <div className="movie-texts"><p>sdv</p></div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsCard;