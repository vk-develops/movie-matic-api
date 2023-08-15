import React from 'react';
import "./Home.css";
import searchIcon from "../../assets/Search.svg";
import MovieCard from '../../Components/MovieCard';
import { useState, useEffect } from 'react';


const Movie1 = {
    "Title": "Thor",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "06 May 2011",
    "Runtime": "115 min",
    "Genre": "Action, Fantasy",
    "Director": "Kenneth Branagh",
    "Writer": "Ashley Miller, Zack Stentz, Don Payne",
    "Actors": "Chris Hemsworth, Anthony Hopkins, Natalie Portman",
    "Plot": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    "Language": "English",
    "Country": "United States",
    "Awards": "5 wins & 30 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "77%"
        },
        {
            "Source": "Metacritic",
            "Value": "57/100"
        }
    ],
    "Metascore": "57",
    "imdbRating": "7.0",
    "imdbVotes": "876,749",
    "imdbID": "tt0800369",
    "Type": "movie",
    "DVD": "01 Jul 2013",
    "BoxOffice": "$181,030,624",
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

    useEffect(() => {
        searchMovie("Thor")
    }, [])
 

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
                <MovieCard movieData={Movie1} />
            </div>
        </section>
    );
}

export default Home;