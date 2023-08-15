import React from 'react';
import "./Home.css";
import searchIcon from "../../assets/Search.svg";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-top">
                <h1>MovieMatic.</h1>
                <p>The MovieMatic is an movie app that displays all the contents regarding the movie you have searched for. Try this out by searching a movie in the below search bar</p>
            </div>
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
        </section>
    );
}

export default Home;