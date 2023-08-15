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
                        <GiTomato color='#E50914' size={30} />
                    </div>
                </div>
                <div className="movie-contents">
                    <div className="movie-img">
                        <img src={movieData.Poster} alt="Poster" />
                    </div>
                    <div className="movie-texts">
                        <div className="category">
                            <h6> {movieData.Type} </h6>
                            <h6> {movieData.Rated} </h6>
                        </div>

                        <div className="about-texts">
                            <h3>About the movie</h3>
                            <p> {movieData.Plot} </p>
                        </div>

                        <div className="about-movie">
                            <div className="movie-about movie-about-1">
                                <h3>Actors</h3>
                                <p> {movieData.Actors} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>Director</h3>
                                <p> {movieData.Director} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>Writer</h3>
                                <p> {movieData.Writer} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>Country</h3>
                                <p> {movieData.Country} </p>
                            </div>
                        </div>

                        <div className="about-movie">
                            <div className="movie-about movie-about-1">
                                <h3>Released</h3>
                                <p> {movieData.Released} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>Runtime</h3>
                                <p> {movieData.Runtime} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>Language</h3>
                                <p> {movieData.Language} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>Awards</h3>
                                <p> {movieData.Awards} </p>
                            </div>
                        </div>

                        <div className="about-movie">
                            <div className="movie-about movie-about-1">
                                <h3>imdbRating</h3>
                                <p> {movieData.imdbRating} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>imdbVotes</h3>
                                <p> {movieData.imdbVotes} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>imdbID</h3>
                                <p> {movieData.imdbID} </p>
                            </div>
                            <div className="movie-about movie-about-1">
                                <h3>BoxOffice</h3>
                                <p> {movieData.BoxOffice} </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsCard;