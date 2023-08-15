import React from 'react';
import "./Home.css";
import searchIcon from "../../assets/Search.svg";
import MovieDetailsCard from '../../Components/MovieDetails/MovieDetailsCard';
import { useState, useEffect } from 'react';


const Movie1 = {
    "Title": "Thor: Love and Thunder",
    "Year": "2022",
    "Rated": "PG-13",
    "Released": "08 Jul 2022",
    "Runtime": "118 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Taika Waititi",
    "Writer": "Taika Waititi, Jennifer Kaytin Robinson, Stan Lee",
    "Actors": "Chris Hemsworth, Natalie Portman, Christian Bale",
    "Plot": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    "Language": "English",
    "Country": "Australia, United States",
    "Awards": "1 win & 18 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "63%"
        },
        {
            "Source": "Metacritic",
            "Value": "57/100"
        }
    ],
    "Metascore": "57",
    "imdbRating": "6.2",
    "imdbVotes": "370,299",
    "imdbID": "tt10648342",
    "Type": "movie",
    "DVD": "08 Sep 2022",
    "BoxOffice": "$343,256,830",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}

const Home = () => {


    const searchMovie = async (movieTitle)  => {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}&t=${movieTitle}`);
        const data = await response.json();

        console.log(data);
    }

    // useEffect(() => {
    //     searchMovie("Thor love and thunder")
    // }, [])
 

    return (
        <section className="home-section">
            <div className="home-top">
                <h1>MovieMatic.</h1>
                <p>The MovieMatic is an movie app that displays all the contents regarding the movie you have searched for. Try this out by searching a movie in the below search bar</p>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Search for movies"
                        value=""
                        onChange={() => {}}
                    />
                    <img 
                        src={searchIcon} 
                        alt="Search" 
                        onClick={() => {}}
                    />
                </div>
            </div>
            <div className="movies">
                <MovieDetailsCard movieData={Movie1} />
            </div>
        </section>
    );
}

export default Home;