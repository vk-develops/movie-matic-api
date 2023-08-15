import React from 'react';
import "./MovieDetailsCard.css";
import { GiTomato } from "react-icons/gi";
 
const MovieDetailsCard = ({ movieData }) => {
    return (
        <div className="card">
            <div className="movie-card">
                <div className="movie-header">
                    <div className="header-left">
                        <h1> {movieData.Title} </h1>
                        <h5> {movieData.Genre} </h5>
                    </div>
                    <div className="header-right">
                        <h5> Ratings: {movieData.Ratings[1].Value} </h5>
                        <GiTomato color='#E50914' />
                    </div>
                </div>
                <div className="movie-contents">
                    <div className="movie-img">
                        <img src={movieData.Poster} alt="Poster" />
                    </div>
                    <div className="movie-texts">
                        <div className="about-texts">
                            <h3>About the movie</h3>
                            <p> {movieData.Plot} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsCard;