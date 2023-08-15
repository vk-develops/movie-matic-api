import React from 'react';
import "./MovieCard.css";

const MovieCard = ({ movieData }) => {
    return (
        <div className="card">
            <h1>You have searched for: Thor</h1>
            <div className="movie-card">
                <div className="movie-img">
                    <img src={movieData.Poster} alt="" />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;