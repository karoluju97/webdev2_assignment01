import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TVContext} from '../contexts/tvContext'
import AddToWatchTVButton from '../components/buttons/addToWatchTV'

const PopularTV = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(TVContext);
  const tvs = context.latest.filter((m) => {  // New
    return !("favoriteTV" in m);
  });
    return (
        <PageTemplate
            title='Popular TV'
            tvs={tvs}  /* Changed */
            action={(tv) => {
                return <AddToWatchTVButton tv={tv} />;
            }}
        />
    );
};

export default PopularTV;