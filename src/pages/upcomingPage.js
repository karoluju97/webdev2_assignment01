import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const Upcoming = () => {
    const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("watchList" in m);
  });
    return (
        <PageTemplate
            title='Upcoming movies'
            movies={movies}  /* Changed */
            action={(movie) => {
                return <AddToWatchListButton movie={movie} />;
            }}
        />
    );
};

export default Upcoming