import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster,genres}){
    return (<div class="movie">

        <img src={poster} alt={title} title={title}/>
       <div class="movie_data">
        <h4 class="movie_title">{title}</h4>
        <h5 class="movie_year">{year}</h5>
         <ul class="movie_genres">{genres.map((genre,index) => (  
        <li key={index} class="genres_genre">{genre}</li>))}</ul>
         <p class="movie_summary">{summary.slice(0,180)}</p> 
       
       </div>
          </div>
          );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;